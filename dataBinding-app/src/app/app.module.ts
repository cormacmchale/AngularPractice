import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PresidentsComponent } from './presidents/presidents.component';


@NgModule({
  declarations: [
    AppComponent,
    PresidentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, PresidentsComponent]
})
export class AppModule { }
