import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanCustomDashboardComponent } from './pan-custom-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PanCustomDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanCustomDashboardRoutingModule { }
