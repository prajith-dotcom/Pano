import {
  Component,
  Input,
  SimpleChanges,
  OnChanges,
 } from '@angular/core';
import { IAccount } from '../../../../pan-typings/account';
import { ICustomer } from '../../../../pan-typings/customer';
import { PanoramaQ as Q } from '../../services/q.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PanOaoComponent } from '../pan-oao/pan-oao.component';

@Component({
  selector: 'pan-accounts',
  templateUrl: './pan-accounts.component.html',
  styleUrls: ['./pan-accounts.component.scss'],
})
export class PanAccountsComponent implements OnChanges {
  @Input() customer: ICustomer;
  @Input() accounts: IAccount[];

  _customer: ICustomer;
  _accounts: IAccount[];
  panelState = 'open';
  selectedIndex = 0;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnChanges(changes: SimpleChanges) {
    this._customer = changes.customer.currentValue;
    this._accounts = changes.customer.currentValue.accounts;
    console.log(changes);
    if (!this._accounts) {
      this.getUserAccounts();
    }
  }

  panelChange(event): void {
    this.panelState = event ?
      'open' : 'closed';
  }

  getUserAccounts(): void {
    Q.customers.get(this._customer.customer_number, false)
      .subscribe(
      cust => this._accounts = cust.accounts || [],
      err => console.log(err),
    );
  }

  openOriginationDialog(): void {
    const dialogRef = this.dialog.open(
      PanOaoComponent,
      {
        minHeight: '380px',
        maxHeight: '1200px',
        maxWidth: '800px',
        minWidth: '600px',
        closeOnNavigation: true,
        data: { customer: this.customer },
      },
    );
    dialogRef.afterClosed()
      .subscribe((result = 'Canceled') => {
        this.snackBar.open(`Application ${result}`, 'dismiss', { duration: 3000 });
      });
  }
}
