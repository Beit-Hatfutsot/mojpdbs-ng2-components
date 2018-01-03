import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppContainerComponent } from './components/AppContainerComponent';
import { MojpHeaderComponent } from './components/MojpHeaderComponent';
import { MojpFooterComponent } from './components/MojpFooterComponent';

import { THEME_TOKEN } from './constants';

/**
 * Created by adam on 27/12/2016.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppContainerComponent,
      MojpHeaderComponent,
      MojpFooterComponent,
  ],
  providers: [],
  exports: [
    AppContainerComponent,
      MojpHeaderComponent,
      MojpFooterComponent,
  ]
})
export class MojpCommonModule { }
