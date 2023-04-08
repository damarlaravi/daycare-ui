import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import {EventsRouteModule} from "./events.route";



@NgModule({
  declarations: [
    EventComponent
  ],
  imports: [
    CommonModule,
    EventsRouteModule
  ]
})
export class EventsModule { }
