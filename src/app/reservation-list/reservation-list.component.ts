import { Component } from '@angular/core';
import {Reservation} from "../shared/reservation";
import {StorageService} from "../shared/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent {
  reservations: Reservation[] = []

  constructor(private storage: StorageService, private router: Router) {
    this.reservations = this.storage.getReservations();
  }

  onEdit(id: string){
    this.router.navigate(['/new/'+id]);
  }

  onDelete(id: string){
    this.storage.deleteReservationById(id);
  }
}
