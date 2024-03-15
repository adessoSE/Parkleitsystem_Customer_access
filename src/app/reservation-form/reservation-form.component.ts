import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ParkingSpot} from "../shared/parking-spot";
import {parkingSpots} from "../shared/parking-spots.model";


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  currentDate = new Date();
  validDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 1)).toDateString(); // sets the valid date to 'tomorrow'
  parkingSpots: ParkingSpot[] = parkingSpots;

  constructor(private formbuilder: FormBuilder) {

  }

  ngOnInit() {
    this.reservationForm = this.formbuilder.group({
      reservationDate: ['', [Validators.required, this.dateValidation()]],
      reservationSpot: ['', Validators.required]
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
    console.log('this has been submitted');
  }
}
