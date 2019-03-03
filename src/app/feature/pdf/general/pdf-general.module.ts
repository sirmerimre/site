import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PdfRoutingModule} from '../pdf-routing.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PdfGeneralComponent} from './pdf-general.component';
import {RemainingCharactersModule} from '../../remaining-characters/remaining-characters.module';

@NgModule({
  declarations: [
    PdfGeneralComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PdfRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RemainingCharactersModule,
  ],
  exports: [
    PdfGeneralComponent,
  ]
})
export class PdfGeneralModule {
}
