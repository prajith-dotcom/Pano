import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanDashboardRoutingModule } from './pan-dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PanTicketsModule } from '../../shared/components/pan-tickets/pan-tickets.module';
import { PanUserStatisticsModule } from '../../shared/components/pan-user-statistics/pan-user-statistics.module';
import { PanDashboardComponent } from './pan-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PanTicketsModule,
    PanUserStatisticsModule,
    PanDashboardRoutingModule,
  ],
  declarations: [ PanDashboardComponent ],
})
export class PanDashboardModule { }
