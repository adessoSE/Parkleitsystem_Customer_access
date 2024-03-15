import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  validDate = new Date().toDateString();

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
      console.log(Date.parse(control.value));
      let forbidden: boolean;
      if (Date.parse(this.validDate) >= Date.parse(control.value)) {
        forbidden = true;
      } else {
        forbidden = false;
      }
      return forbidden ? {forbiddenDate: {value: control.value}} : null;
    }
  }

  onSubmit() {
    // submit to DB
  }
}
