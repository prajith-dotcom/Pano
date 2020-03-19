import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanCustomerComponent } from './pan-customer.component';

const routes: Routes = [
  {
    path: '',
    component: PanCustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanCustomerRoutingModule { }
