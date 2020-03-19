import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanOffersComponent } from './pan-offers.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    PanOffersComponent,
  ],
  exports: [
    PanOffersComponent,
  ],
})
export class PanOffersModule { }
