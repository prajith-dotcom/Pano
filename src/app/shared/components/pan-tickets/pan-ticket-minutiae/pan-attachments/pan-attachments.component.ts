import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { IAttachment } from '../../../../../../pan-typings/shared';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'pan-attachments',
  templateUrl: './pan-attachments.component.html',
  styleUrls: ['./pan-attachments.component.scss'],
})
export class PanAttachmentsComponent implements OnInit, AfterViewInit {
  @Input() attachments: IAttachment[];
  dataSource: MatTableDataSource<IAttachment>;
  displayedColumns = [
    'added',
    'addedBy',
    'fileName',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.attachments);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
