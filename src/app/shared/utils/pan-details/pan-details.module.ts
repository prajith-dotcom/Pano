import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanDetailsComponent } from './pan-details.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [ PanDetailsComponent ],
  exports: [ PanDetailsComponent ],
})
export class PanDetailsModule { }
