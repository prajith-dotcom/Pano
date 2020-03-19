import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';

/** Components */
import { PanAccountListComponent } from './pan-account-list/pan-account-list.component';
import { PanAccountsComponent } from './pan-accounts.component';
import { PanTransactionsModule } from '../pan-transactions/pan-transactions.module';
import { PanOaoModule } from '../pan-oao/pan-oao.module';
import { PanOaoComponent } from '../pan-oao/pan-oao.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PanTransactionsModule,
    PanOaoModule,
  ],
  declarations: [
    PanAccountListComponent,
    PanAccountsComponent,
  ],
  exports: [
    PanAccountListComponent,
    PanAccountsComponent,
  ],
  entryComponents: [
    PanOaoComponent,
  ],
})
export class PanAccountsModule { }
