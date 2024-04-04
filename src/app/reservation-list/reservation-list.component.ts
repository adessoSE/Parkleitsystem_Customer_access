import { Component } from '@angular/core';
import {Reservation} from "../shared/reservation";
import {StorageService} from "../shared/storage.service";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent {
  reservations: Reservation[] = []

  constructor(private storage: StorageService) {
    this.reservations = this.storage.getReservations();
  }
}
