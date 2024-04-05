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
    this.updateReservations();
  }

  updateReservations(){
    let savedReservations: string | null = localStorage.getItem("reservations");
    this.reservationMocks = savedReservations ? JSON.parse(savedReservations) : [];
  }

  getSpots(): ParkingSpot[] {
    return this.parkingSpots;
  }

  getReservations(): Reservation[] {
    return this.reservationMocks;
  }

  addReservation(reservation: Reservation) {
    reservation.id = Date.now().toString();
    this.reservationMocks.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservationMocks));
  }

  getReservationById(id: string): Reservation | undefined {
    let foundReservation = this.reservationMocks.find(reservation => reservation.id === id);

    return foundReservation;
  }

  deleteReservationById(id: string){
    let index = this.reservationMocks.findIndex(reservation => reservation.id === id);
    this.reservationMocks.splice(index, 1);
    localStorage.setItem("reservations", JSON.stringify(this.reservationMocks));
  }
}
