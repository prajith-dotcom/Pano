import { Component, OnInit, DoCheck } from '@angular/core';
import { ICustomer } from '../../../pan-typings/customer';
import { SearchService } from '../../shared/services/search.service';
import { IApplication } from '../../../pan-typings/account';

@Component({
  selector: 'pan-pan-customer',
  templateUrl: './pan-customer.component.html',
  styleUrls: ['./pan-customer.component.scss'],
})
export class PanCustomerComponent implements OnInit, DoCheck {
  customer: ICustomer;
  app = {};

  constructor() { }

  ngOnInit() {
    this.customer = SearchService.customer;
  }

  ngDoCheck() {
    this.customer = SearchService.customer;
  }

  /**
   * @name appSubmitted
   * @param app - application submitted
   * @desc updates apps array with new app
   */
  appSubmitted(app: IApplication): void {
    Object.assign(this, { app });
  }
}
