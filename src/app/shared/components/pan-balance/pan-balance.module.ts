import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanBalanceComponent } from './pan-balance.component';
import { SharedModule } from '../../shared.module';
import { PanChartModule } from '../pan-chart/pan-chart.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PanChartModule,
    ChartsModule,
  ],
  declarations: [PanBalanceComponent],
  exports: [PanBalanceComponent],
})
export class PanBalanceModule { }
