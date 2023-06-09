import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventComponent} from "./event/event.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: "full"
  },
  {
    path: 'events',
    component: EventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRouteModule { }
