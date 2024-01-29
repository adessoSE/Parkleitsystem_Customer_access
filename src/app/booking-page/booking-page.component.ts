import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, NgForm} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

import {SPOTS} from "../shared/mocking-spots";
import {BOOKINGS} from "../shared/mocking-bookings";
import {Parkingspot} from "../shared/parkingspot";

@Component({
  selector: 'app-booking-page',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule, HttpClientModule, NgIf
  ],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css'
})
export class BookingPageComponent implements OnInit {
  spots : Parkingspot[] = SPOTS;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    const formData = form.value;
    BOOKINGS.push({id: BOOKINGS.length + 1, spotId: formData.spot, user: 'testuser', date: formData.date});
    console.log(BOOKINGS);
  }

  onInput(): void {
    //
  }
}
