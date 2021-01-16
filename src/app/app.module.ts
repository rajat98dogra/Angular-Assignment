import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Assignment1Module } from './assignment1/assignment1.module';
import { Assignment2Module } from './assignment2/assignment2.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Assignment1Module,
    Assignment2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
