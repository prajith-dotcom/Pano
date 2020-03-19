import {
  animate,
  state,
  style,
  transition,
  trigger,
 } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
 } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { IAccount } from '../../../../../pan-typings/account';
import { PanDetailRowDirective } from '../../../directives/pan-detail-row.directive';
import { ICustomer } from '../../../../../pan-typings/customer';

@Component({
  selector: 'pan-account-list',
  templateUrl: './pan-account-list.component.html',
  styleUrls: ['./pan-account-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PanAccountListComponent implements OnChanges, AfterViewInit  {
  @Input() customer: ICustomer;
  @Input() accountType: string;
  @Input() singleChildRowDetail: boolean;
  @Input() accounts: IAccount[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private openedRow: PanDetailRowDirective;

  selectedAccountNumber: string;
  dataSource: MatTableDataSource<IAccount>;
  displayedColumns = [];
  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');

  ngOnChanges(): void {
    Object.assign(this, {
      dataSource: new MatTableDataSource<IAccount>(this.accounts),
      displayedColumns: [
        'accountNumber',
        'accountName',
        'accountType',
        'available',
        'posted',
        'status',
      ],
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onToggleChange(panDetailRow: PanDetailRowDirective): void {
    this.selectedAccountNumber = panDetailRow.row.id;
    if (this.singleChildRowDetail && this.openedRow && this.openedRow.expended) {
      this.openedRow.toggle();
    }
    this.openedRow = panDetailRow.expended ? panDetailRow : undefined;
  }
}
