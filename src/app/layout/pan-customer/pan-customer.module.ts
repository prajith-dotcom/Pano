import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanCustomerRoutingModule } from './pan-customer-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PanAccountsModule } from '../../shared/components/pan-accounts/pan-accounts.module';
import {
  PanInlineMaintenanceModule,
} from '../../shared/components/pan-inline-maintenance/pan-inline-maintenance.module';
import {
  PanTransactionsModule,
} from '../../shared/components/pan-transactions/pan-transactions.module';
import { PanCustomerComponent } from './pan-customer.component';
import { PanActionsModule } from '../../shared/components/pan-actions/pan-actions.module';
import {
  PanPendingApplicationsModule,
} from '../../shared/components/pan-pending-applications/pan-pending-applications.module';
import { PanOffersModule } from '../../shared/components/pan-offers/pan-offers.module';
import {
  PanCustomerProfileModule,
} from '../../shared/components/pan-customer-profile/pan-customer-profile.module';
import { PanBalanceModule } from '../../shared/components/pan-balance/pan-balance.module';
import {
  PanProductSummaryModule,
} from '../../shared/components/pan-product-summary/pan-product-summary.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PanInlineMaintenanceModule,
    PanAccountsModule,
    PanCustomerRoutingModule,
    PanTransactionsModule,
    PanActionsModule,
    PanPendingApplicationsModule,
    PanOffersModule,
    PanCustomerProfileModule,
    PanTransactionsModule,
    PanBalanceModule,
    PanProductSummaryModule,
  ],
  declarations: [PanCustomerComponent],
})
export class PanCustomerModule { }
