import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
  

import {​​​​​​ HttpClientModule}​​​​​​ from'@angular/common/http';
import { GetteaminfoPipe } from './getteaminfo.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    GetteaminfoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
