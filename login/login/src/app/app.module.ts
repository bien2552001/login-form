import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Login123Component } from './logincheck/login123/login123.component';
import { RegisterComponent } from './logincheck/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    Login123Component,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
