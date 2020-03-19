import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { PanDashboardComponent } from './pan-dashboard/pan-dashboard.component';
import { PanSearchComponent } from './pan-search/pan-search.component';
import { PanCustomerComponent } from './pan-customer/pan-customer.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        data: ['ADMIN'],
        //canLoad: [AuthGuard],
        loadChildren: './pan-dashboard/pan-dashboard.module#PanDashboardModule',
      },
      {
        path: 'search',
        data: ['ADMIN'],
        //canLoad: [AuthGuard],
        loadChildren: './pan-search/pan-search.module#PanSearchModule',
      },
      {
        path: 'customer',
        //canLoad: [AuthGuard],
        loadChildren: './pan-customer/pan-customer.module#PanCustomerModule',
      },
      {
        path: 'statistics',
        data: ['ADMIN'],
        //canLoad: [AuthGuard],
        loadChildren: './pan-stats/pan-stats.module#PanStatsModule',
      },
      {
        path: 'custom-dashboard',
        data: ['ADMIN'],
        //canLoad: [AuthGuard],
        loadChildren: './pan-custom-dashboard/pan-custom-dashboard.module#PanCustomDashboardModule',
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
