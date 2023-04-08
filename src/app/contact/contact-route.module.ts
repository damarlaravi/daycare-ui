import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact-us',
    pathMatch: "full"
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRouteModule { }
