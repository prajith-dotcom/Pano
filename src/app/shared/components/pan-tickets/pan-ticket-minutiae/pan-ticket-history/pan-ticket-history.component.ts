import { Component, OnInit, Input, AfterViewInit, ViewChild, OnChanges } from '@angular/core';
import { IAction } from '../../../../../../pan-typings/action';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'pan-ticket-history',
  templateUrl: './pan-ticket-history.component.html',
  styleUrls: ['./pan-ticket-history.component.scss'],
})
export class PanTicketHistoryComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() actions: IAction[];
  dataSource: MatTableDataSource<IAction>;
  displayedColumns = [
    'actionNumber',
    'actionTime',
    'username',
    'actionType',
    'description',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnChanges() {
    this.actions = this.actions.sort((a, b) =>  +new Date(b.actionTime) - +new Date(a.actionTime));
    this.dataSource = new MatTableDataSource(this.actions);
  }
  ngOnInit() {
    this.actions = this.actions.sort((a, b) =>  +new Date(b.actionTime) - +new Date(a.actionTime));
    this.dataSource = new MatTableDataSource(this.actions);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
