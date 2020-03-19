import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanStatsComponent } from './pan-stats.component';

const routes: Routes = [
  {
    path: '',
    component: PanStatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanStatsRoutingModule { }
