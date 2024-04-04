import {Injectable} from '@angular/core';
import {ParkingSpot} from './parking-spot';
import {parkingSpots} from './parking-spots.model';
import {Reservation} from './reservation';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private parkingSpots: ParkingSpot[] = parkingSpots;
  private reservationMocks: Reservation[] = [];

  constructor() {
    let savedReservations: string | null = localStorage.getItem("reservations");
    this.reservationMocks = savedReservations? JSON.parse(savedReservations) : [];
  }

  getSpots(): ParkingSpot[]{
    return this.parkingSpots;
  }

  getReservations(): Reservation[]{
    return this.reservationMocks;
  }

  addReservation(reservation: Reservation){
    reservation.id = Date.now().toString();
    this.reservationMocks.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservationMocks));
  }
}
