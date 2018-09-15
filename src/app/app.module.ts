import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { registerLocaleData } from '@angular/common';
// import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
