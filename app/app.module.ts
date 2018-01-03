import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MojpCommonModule, THEME_TOKEN } from '../src';

import { AppComponent } from './app.component';

declare const process: any;

@NgModule({
  imports: [
    BrowserModule,
    MojpCommonModule
  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
