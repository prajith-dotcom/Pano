import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanCustomDashboardRoutingModule } from './pan-custom-dashboard-routing.module';
import { PanCustomDashboardComponent } from './pan-custom-dashboard.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PanCustomDashboardRoutingModule,
    SharedModule,
  ],
  declarations: [PanCustomDashboardComponent],
})
export class PanCustomDashboardModule { }
