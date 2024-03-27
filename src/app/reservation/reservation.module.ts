import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HomeComponent} from '../home/home.component';
import {ReservationFormComponent} from '../reservation-form/reservation-form.component';
import {ReservationListComponent} from '../reservation-list/reservation-list.component';
import {SvgComponent} from "../svg/svg.component";


@NgModule({
  declarations: [
    HomeComponent,
    ReservationFormComponent,
    ReservationListComponent,
    SvgComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ReservationModule {
}
