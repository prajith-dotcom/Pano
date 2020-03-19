import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';

/** Components */
import { PanLogComplaintComponent } from './pan-log-complaint/pan-log-complaint.component';
import { PanTransactionListComponent } from './pan-transaction-list/pan-transaction-list.component';
import { PanTransactionsComponent } from './pan-transactions.component';
import {
  PanTicketSubmittedModalComponent,
} from '../pan-tickets/pan-ticket-submitted-modal/pan-ticket-submitted-modal.component';
import { PanQuestionnaireComponent } from './pan-questionnaire/pan-questionnaire.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    PanTransactionsComponent,
    PanQuestionnaireComponent,
    PanTransactionListComponent,
    PanLogComplaintComponent,
  ],
  exports: [
    PanTransactionsComponent,
    PanQuestionnaireComponent,
    PanTransactionListComponent,
    PanLogComplaintComponent,
  ],
  entryComponents: [
    PanLogComplaintComponent,
    PanTicketSubmittedModalComponent,
  ],
})
export class PanTransactionsModule { }
