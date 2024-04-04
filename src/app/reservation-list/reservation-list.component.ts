import {Component} from '@angular/core';
import {Reservations} from '../shared/reservations.model';
import {Reservation} from '../shared/reservation';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent {
  reservationMocks: Reservation[] = Reservations;

  constructor(private router: Router) {
  }

  onEdit(id: string){
    //navigate to /new:id
    this.router.navigate(['/new/'+id]);
  }

  onDelete(id: string){
   //delete
  }
}
