import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import {EventsRouteModule} from "./events.route";
import {DividerModule} from "primeng/divider";



@NgModule({
  declarations: [
    EventComponent
  ],
  imports: [
    CommonModule,
    DividerModule,
    EventsRouteModule
  ]
})
export class EventsModule { }
