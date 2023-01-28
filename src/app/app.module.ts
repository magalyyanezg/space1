import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
export class data{
  last_update: string;
  launches: string;
  serial: string;
  status: string;
  type: string;

  constructor(last_update: string,launches: string,serial: string,status: string,type: string){
    this.last_update = last_update;
    this.launches = launches;
    this.serial = serial;
    this.status = status;
    this.type = type;
  }
}



