import { Component, OnInit, DoCheck } from '@angular/core';
import { ICustomer } from '../../../pan-typings/customer';
import { SearchService } from '../../shared/services/search.service';

@Component({
  selector: 'pan-pan-dashboard',
  templateUrl: './pan-dashboard.component.html',
  styleUrls: ['./pan-dashboard.component.scss'],
})
export class PanDashboardComponent implements OnInit, DoCheck {
  customer: ICustomer;
  selectedTicketFilter = 'User';

  constructor() { }

  ngOnInit() {
    this.customer = SearchService.customer;
  }

  ngDoCheck() {
    this.customer = SearchService.customer;
  }
}
