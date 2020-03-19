import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { PanCustomerProfileComponent } from './pan-customer-profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [PanCustomerProfileComponent],
  exports: [PanCustomerProfileComponent],
})
export class PanCustomerProfileModule { }
