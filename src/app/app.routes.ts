import { Routes } from '@angular/router';
import {BookingPageComponent} from "./booking-page/booking-page.component";
import {StartPageComponent} from "./start-page/start-page.component";
import {ReservationsPageComponent} from "./reservations-page/reservations-page.component";
import {HelpPageComponent} from "./help-page/help-page.component";

export const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'booking', component: BookingPageComponent},
  {path: 'reservations', component: ReservationsPageComponent},
  {path: 'help', component: HelpPageComponent}
];
