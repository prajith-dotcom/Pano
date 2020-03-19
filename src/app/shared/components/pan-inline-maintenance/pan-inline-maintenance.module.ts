import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { PanInlineMaintenanceComponent } from './pan-inline-maintenance.component';
import { PanOaoComponent } from '../pan-oao/pan-oao.component';
import { PanOaoModule } from '../pan-oao/pan-oao.module';
import { PanDetailsModule } from '../../utils/pan-details/pan-details.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PanOaoModule,
    PanDetailsModule,
  ],
  providers: [],
  declarations: [PanInlineMaintenanceComponent],
  exports: [PanInlineMaintenanceComponent],
  entryComponents: [PanOaoComponent],
})
export class PanInlineMaintenanceModule { }
