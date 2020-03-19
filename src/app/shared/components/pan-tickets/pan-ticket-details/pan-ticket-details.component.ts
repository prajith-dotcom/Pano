import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import {
  ITicket,
} from '../../../../../pan-typings/ticket';
import {
  TicketDetailsConfig,
} from './config';

@Component({
  selector: 'pan-ticket-details',
  templateUrl: './pan-ticket-details.component.html',
  styleUrls: ['./pan-ticket-details.component.scss'],
})
export class PanTicketDetailsComponent implements OnInit {
  @Input() ticket: ITicket;
  state = 'static';
  rows = TicketDetailsConfig.rows;

  constructor() {}

  ngOnInit() { }
}
