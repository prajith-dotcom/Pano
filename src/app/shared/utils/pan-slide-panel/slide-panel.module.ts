import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanSlidePanelComponent } from './slide-panel.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ PanSlidePanelComponent ],
  exports: [ PanSlidePanelComponent ],
})
export class SlidePanelModule { }
