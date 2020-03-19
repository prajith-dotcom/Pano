import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ITransaction } from '../../../../../pan-typings/trasaction';
import {
  MatTableDataSource,
  MatPaginator, MatSort,
  MatDialog,
  MatSnackBar,
 } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { PanLogComplaintComponent } from '../pan-log-complaint/pan-log-complaint.component';
import { PanDetailRowDirective } from '../../../directives/pan-detail-row.directive';
import { TransactionConfig } from '../config';
import { PanoramaQ as Q } from '../../../services/q.service';
import { IAccount } from '../../../../../pan-typings/account';
import { ICustomer } from '../../../../../pan-typings/customer';
import { Router } from '@angular/router';
import {
  PanTicketSubmittedModalComponent,
} from '../../pan-tickets/pan-ticket-submitted-modal/pan-ticket-submitted-modal.component';

@Component({
  selector: 'pan-transaction-list',
  templateUrl: './pan-transaction-list.component.html',
  styleUrls: ['./pan-transaction-list.component.scss'],
})
export class PanTransactionListComponent implements OnInit, AfterViewInit {
  @Input() accountNumber: string;
  @Input() transactions: ITransaction[];
  @Input() singleChildRowDetail: boolean;
  @Input() customer: ICustomer;
  @Input() showHeader: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private openedRow: PanDetailRowDirective;

  filters = {
    narrative: '',
    fromDate: '',
    toDate: '',
    amountMin: '',
    amountMax: '',
  };
  filterState = 'idle';
  dataSource: MatTableDataSource<ITransaction>;
  displayedColumns = [
    'select',
    'transactionNumber',
    'postedDate',
    'narrative',
    'amount',
    'newBalance',
  ];
  _transactions: ITransaction[];
  account: IAccount;
  option = '';
  selection = new SelectionModel<ITransaction>(true, []);
  isExpansionDetailRow = (index, row): boolean => row.hasOwnProperty('detailRow');

  constructor(public dialog: MatDialog, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.transactions) {
      this._transactions = this.transactions;
      this.createDataSource(true);
      return;
    }
    this.getTransactions();
  }

  ngAfterViewInit(): void {
    if (this.transactions) {
      this._transactions = this.transactions;
      this.createDataSource(true);
      return;
    }

    this.getTransactions();
  }

  /**
   * @name getTransactions
   * @desc fetch transactions
   */
  getTransactions(): void {
    Q.accounts.get(this.accountNumber)
    .subscribe(
      account => Object.assign(this, { account, _transactions: account.transactions || [] }),
      err => console.log(err),
      () => this.createDataSource(false),
    );
  }

  /**
   * @name createDataSource
   * @param shiftColumns - determines whether to display checkbox
   * @desc creates the table data source
   */
  createDataSource(shiftColumns: boolean): void {
    if (shiftColumns) this.displayedColumns.shift();
    this._transactions.sort((a, b) => +new Date(b.details.posted) - +new Date(a.details.posted));
    Object.assign(this, {
      dataSource: new MatTableDataSource<ITransaction>(this._transactions),
      loadProgress: 100,
    });
    Object.assign(this.dataSource, {
      sort: this.sort,
      filterPredicate: this.createFilter,
      paginator: this.paginator,
    });
  }

  onToggleChange(panDetailRow: PanDetailRowDirective): void {
    if (this.singleChildRowDetail && this.openedRow && this.openedRow.expended) {
      this.openedRow.toggle();
    }
    this.openedRow = panDetailRow.expended ? panDetailRow : undefined;
  }

  onFilterInputChange(): void {
    this.filterState = 'filtered';
    this.dataSource.filter = JSON.stringify(this.filters);
  }

  createFilter(data: ITransaction, filter: string): boolean {
    return Object.keys(TransactionConfig.transactionFilters)
      .every(val => TransactionConfig.transactionFilters[val](data, JSON.parse(filter)[val]));
  }

  resetFilters(): void {
    Object.keys(this.filters).forEach((filter) => {
      this.filters[filter] = '';
    });
    this.dataSource.filter = JSON.stringify(this.filters);
    this.filterState = 'idle';
  }

  openDisputeDialog(): void {
    const dialogRef = this.dialog.open(PanLogComplaintComponent, {
      minHeight: '380px',
      maxHeight: '1200px',
      width: '930px',
      closeOnNavigation: true,
      disableClose: true,
      data: {
        customer: this.customer,
        transactions: this.selection.selected,
        account: this.account,
      },
    });
    dialogRef.afterClosed()
      .subscribe(([result, message]) => {
        return {
          cancel: () => {
            this.snackBar.open(
              'Dispute Canceled',
              'dismiss',
              {
                duration: 3000,
              },
            );
          },
          error: () => {
            this.snackBar.open(
              'Error Creating Ticket',
              'dismiss',
              {
                duration: 3000,
              },
            );
          },
          success: () => {
            this.router.navigateByUrl('/');
            const successDialog = this.dialog.open(PanTicketSubmittedModalComponent, {
              minHeight: '380px',
              maxHeight: '1200px',
              width: '800px',
              closeOnNavigation: true,
              disableClose: true,
              data: { message },
            });
          },
        }[result]();
      });
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
