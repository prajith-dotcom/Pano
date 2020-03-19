import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { PanUserStatisticsComponent } from './pan-user-statistics.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule,
  ],
  declarations: [ PanUserStatisticsComponent ],
  exports: [ PanUserStatisticsComponent ],
})
export class PanUserStatisticsModule { }
