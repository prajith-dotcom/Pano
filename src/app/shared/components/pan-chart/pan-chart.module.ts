import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanChartComponent } from './pan-chart.component';
import { SharedModule } from '../../shared.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule,
  ],
  declarations: [
    PanChartComponent,
  ],
  exports: [
    PanChartComponent,
  ],
})
export class PanChartModule { }
