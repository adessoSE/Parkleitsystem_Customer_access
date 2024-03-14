import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.reservationForm = this.formbuilder.group({
      reservationDate: ['', Validators.required],
      reservationSpot: ['', Validators.required]
    })
  }

  onSubmit() {
    // submit to DB
  }
}
