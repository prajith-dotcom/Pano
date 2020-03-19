import { Component, Input } from '@angular/core';
import { ICustomer } from '../../../../pan-typings/customer';
import { ITransaction } from '../../../../pan-typings/trasaction';

@Component({
  selector: 'pan-transactions',
  templateUrl: './pan-transactions.component.html',
  styleUrls: ['./pan-transactions.component.scss'],
})
export class PanTransactionsComponent {
  @Input() transactions: ITransaction[];
  @Input() customer: ICustomer;
  @Input() accountNumber: string;
}
