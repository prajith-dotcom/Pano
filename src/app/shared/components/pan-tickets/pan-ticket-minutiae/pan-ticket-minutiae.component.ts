import { Component, OnInit, Input } from '@angular/core';
import { ITicket } from '../../../../../pan-typings/ticket';

@Component({
  selector: 'pan-ticket-minutiae',
  templateUrl: './pan-ticket-minutiae.component.html',
  styleUrls: ['./pan-ticket-minutiae.component.scss']
})
export class PanTicketMinutiaeComponent implements OnInit {
  @Input() ticket;
  selectedIndex = 0;

  constructor() { }

  ngOnInit() {
  }

}
