import { Component } from '@angular/core';

import {BOOKINGS} from "../shared/mocking-bookings";
import {NgForOf, NgIf} from "@angular/common";
import {Booking} from "../shared/booking";

@Component({
  selector: 'app-reservations-page',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './reservations-page.component.html',
  styleUrl: './reservations-page.component.css'
})
export class ReservationsPageComponent {
  bookings : Booking[] = BOOKINGS;
}
