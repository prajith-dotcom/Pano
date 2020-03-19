import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { PanPendingApplicationsComponent } from './pan-pending-applications.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [PanPendingApplicationsComponent],
  exports: [PanPendingApplicationsComponent],
})
export class PanPendingApplicationsModule { }
