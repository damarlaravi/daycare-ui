import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RippleModule} from 'primeng/ripple';
import {MenubarComponent} from "./menubar/menubar.component";
import {MenubarModule} from "primeng/menubar";
import {HomeComponent} from './home/home.component';
import {OverlayPanelModule} from "primeng/overlaypanel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuModule} from "primeng/menu";
import {NgOptimizedImage} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RippleModule,
    MenubarModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    MenuModule,
    NgOptimizedImage,
    InputTextModule,
    InputTextareaModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
