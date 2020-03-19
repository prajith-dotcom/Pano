import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanDashboardComponent } from './pan-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PanDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanDashboardRoutingModule { }
