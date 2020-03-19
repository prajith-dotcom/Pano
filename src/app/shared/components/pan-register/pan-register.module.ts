import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanRegisterComponent } from './pan-register.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    PanRegisterComponent,
  ],
  declarations: [PanRegisterComponent],
})
export class PanRegisterModule { }
