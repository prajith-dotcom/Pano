import { Component, OnInit, Input } from '@angular/core';
import { IAccount } from '../../../../pan-typings/account';
import { PanoramaQ as Q } from '../../services/q.service';

@Component({
  selector: 'pan-product-summary',
  templateUrl: './pan-product-summary.component.html',
  styleUrls: ['./pan-product-summary.component.scss'],
})
export class PanProductSummaryComponent implements OnInit {
  @Input() accounts: IAccount[];
  @Input() customerNumber: string;
  panelState = 'open';

  constructor() { }

  ngOnInit() {
    if (!this.accounts) {
      Q.customers.get(this.customerNumber, false)
        .subscribe(
        cust => this.accounts = cust.accounts || [],
        err => console.log(err),
      );
    }
  }

  panelChange(event): void {
    this.panelState = event ?
      'open' : 'closed';
  }

  nFormatter(num, digits = 2) {
    const si = [
      { value: 1, symbol: '' },
      { value: 1E3, symbol: 'k' },
      { value: 1E6, symbol: 'M' },
      { value: 1E9, symbol: 'G' },
      { value: 1E12, symbol: 'T' },
      { value: 1E15, symbol: 'P' },
      { value: 1E18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i -= 1) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
  }

}
