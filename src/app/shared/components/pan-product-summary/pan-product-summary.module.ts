import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanProductSummaryComponent } from './pan-product-summary.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [PanProductSummaryComponent],
  exports: [PanProductSummaryComponent],
})
export class PanProductSummaryModule { }
