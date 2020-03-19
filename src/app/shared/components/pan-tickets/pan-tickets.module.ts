import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanTicketsComponent } from './pan-tickets.component';
import { SharedModule } from '../../shared.module';
import { SlidePanelModule } from '../../utils/pan-slide-panel/slide-panel.module';
import { PanTicketsListComponent } from './pan-tickets-list/pan-tickets-list.component';
import { PanTicketDetailsComponent } from './pan-ticket-details/pan-ticket-details.component';
import { PanTicketActionsComponent } from './pan-ticket-actions/pan-ticket-actions.component';
import { PanTasksListComponent } from './pan-tasks-list/pan-tasks-list.component';
import { PanTicketMinutiaeComponent } from './pan-ticket-minutiae/pan-ticket-minutiae.component';
import {
  PanTicketHistoryComponent,
} from './pan-ticket-minutiae/pan-ticket-history/pan-ticket-history.component';
import { PanTransactionsModule } from '../pan-transactions/pan-transactions.module';
import {
  PanTakeActionComponent,
} from './pan-ticket-actions/pan-take-action/pan-take-action.component';
import {
  PanProcessDataComponent,
} from './pan-ticket-minutiae/pan-process-data/pan-process-data.component';
import { PanKeywordsComponent } from './pan-ticket-minutiae/pan-keywords/pan-keywords.component';
import {
  PanAttachmentsComponent,
} from './pan-ticket-minutiae/pan-attachments/pan-attachments.component';
import { PanDetailsModule } from '../../utils/pan-details/pan-details.module';
import {
  PanTicketSubmittedModalComponent,
} from './pan-ticket-submitted-modal/pan-ticket-submitted-modal.component';

@NgModule({
  imports: [
    CommonModule,
    PanDetailsModule,
    SharedModule,
    SlidePanelModule,
    PanTransactionsModule,
  ],
  exports: [
    PanTicketsComponent,
    SharedModule,
    SlidePanelModule,
  ],
  declarations: [
    PanTicketsComponent,
    PanTicketsListComponent,
    PanTicketDetailsComponent,
    PanTicketActionsComponent,
    PanTasksListComponent,
    PanTicketMinutiaeComponent,
    PanTicketHistoryComponent,
    PanTakeActionComponent,
    PanProcessDataComponent,
    PanKeywordsComponent,
    PanAttachmentsComponent,
    PanTicketSubmittedModalComponent,
  ],
  entryComponents: [
    PanTakeActionComponent,
    PanTicketSubmittedModalComponent,
  ],
})
export class PanTicketsModule { }
