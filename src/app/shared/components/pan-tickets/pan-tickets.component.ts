import { Component, Input, DoCheck, Output, EventEmitter } from '@angular/core';
import { ICustomer } from '../../../../pan-typings/customer';
import { ITicket } from '../../../../pan-typings/ticket';
import { PanoramaQ as Q } from '../../services/q.service';

@Component({
  selector: 'pan-tickets',
  templateUrl: './pan-tickets.component.html',
  styleUrls: ['./pan-tickets.component.scss'],
})
export class PanTicketsComponent implements DoCheck {
  @Input() customer: ICustomer;
  @Output() selectedTicketFilterChange = new EventEmitter;

  selectedTicket: ITicket;
  activePane = 'left';

  @Input() selectedTicketFilter;

  constructor() { }

  ngDoCheck(): void {
    this.activePane = this.selectedTicket ?
      'right' :
      'left';
  }

  updateTicket(): void {
    Q.tickets.get(this.selectedTicket.ticketNumber, false)
      .subscribe(
        res => this.selectedTicket = res,
        err => console.log(err),
        () => console.log('done'),
      );
  }
}
