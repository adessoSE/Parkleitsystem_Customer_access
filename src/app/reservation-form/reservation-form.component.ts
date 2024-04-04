import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

import {ParkingSpot} from '../shared/parking-spot';
import {parkingSpots} from '../shared/parking-spots.model';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  currentDate: Date;
  validDate: string;
  parkingSpots: ParkingSpot[] = parkingSpots;
  // selectedSpot: number | undefined; //obsolete?

  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.currentDate = new Date();
    this.validDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 1)).toDateString(); // sets the valid date to 'tomorrow'
  }

  ngOnInit() {
    this.reservationForm = this.formbuilder.group({
      reservationDate: ['', [Validators.required, this.dateValidation()]],
      reservationSpot: ['', Validators.required]
    })
    this.reservationForm.get('reservationSpot')?.valueChanges.subscribe(change => {
      if (change && typeof (change) === "string") {
        this.onSpotPicked(Number(change));
      }
    })
  }

  public dateValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let forbidden: boolean;
      if (Date.parse(this.validDate) >= Date.parse(control.value)) { // is the input smaller or equal to the valid date?
        forbidden = true;
      } else {
        forbidden = false;
      }
      return forbidden ? {forbiddenDate: {value: control.value}} : null;
    }
  }

  onSubmit() {
    // submit to DB
    this.router.navigate(['/list']);//returns promise, needs onRejected functionality
  }

  onSpotPicked(id: number) {
    // this.selectedSpot = id; //obsolete?
    const oldRect = document.querySelector('.selectedSpot');
    oldRect?.classList.replace('selectedSpot', 'parkingSpot');
    const thisRect = document.getElementById(`rect` + id);
    thisRect?.classList.replace('parkingSpot', 'selectedSpot');
    this.reservationForm.get('reservationSpot')?.patchValue(id);
  }

  onModalDate() {
    //Date form Modal to Form
    console.log('The Date has been picked');
  }
}
