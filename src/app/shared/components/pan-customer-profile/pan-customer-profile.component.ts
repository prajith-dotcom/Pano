import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from '../../../../pan-typings/customer';

@Component({
  selector: 'pan-customer-profile',
  templateUrl: './pan-customer-profile.component.html',
  styleUrls: ['./pan-customer-profile.component.scss'],
})
export class PanCustomerProfileComponent implements OnInit {
  @Input() customer: ICustomer;
  panelState = 'open';

  constructor() { }

  ngOnInit() {
  }

  panelChange(event): void {
    this.panelState = event ?
      'open' : 'closed';
  }

}
