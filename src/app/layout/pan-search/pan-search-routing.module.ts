import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanSearchComponent } from './pan-search.component';

const routes: Routes = [
  {
    path: '',
    component: PanSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanSearchRoutingModule { }
