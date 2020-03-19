import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { PanActionsComponent } from './pan-actions.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    PanActionsComponent,
  ],
  exports: [
    PanActionsComponent,
  ],
})
export class PanActionsModule { }
