import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanStatsComponent } from './pan-stats.component';
import { SharedModule } from '../../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { PanStatsRoutingModule } from './pan-stats-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PanStatsRoutingModule,
    ChartsModule,
  ],
  declarations: [
    PanStatsComponent,
  ],
})
export class PanStatsModule { }
