import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ContactRouteModule} from "./contact-route.module";
import {CardModule} from "primeng/card";
import {AccordionModule} from "primeng/accordion";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    AccordionModule,
    ButtonModule,
    CommonModule,
    ContactRouteModule,
    CardModule
  ]
})
export class ContactModule {
}
