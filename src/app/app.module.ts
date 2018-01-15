import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {SpotfiyService} from "./service/spotify.service";
import {appRouting,RoutingComponent} from './app-routing';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [SpotfiyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
