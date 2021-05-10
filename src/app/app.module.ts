import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';
import {CbPipe} from './cb.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Cb1Pipe } from './cb1.pipe';

registerLocaleData(localeFr, localeFr);
@NgModule({
  declarations: [
    AppComponent,
    CbPipe,
    Cb1Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
   {
        provide: LOCALE_ID,
        useValue:'fr-FR'
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
