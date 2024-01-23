import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {StartPageComponent} from "./start-page/start-page.component";
import {BookingPageComponent} from "./booking-page/booking-page.component";
import {ReservationsPageComponent} from "./reservations-page/reservations-page.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, StartPageComponent, BookingPageComponent, ReservationsPageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomerAccess';
}
