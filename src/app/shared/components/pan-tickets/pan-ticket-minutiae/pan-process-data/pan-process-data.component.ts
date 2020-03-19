import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { IParam } from '../../../../../../pan-typings/shared';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { IAction } from '../../../../../../pan-typings/action';

@Component({
  selector: 'pan-process-data',
  templateUrl: './pan-process-data.component.html',
  styleUrls: ['./pan-process-data.component.scss'],
})
export class PanProcessDataComponent implements OnInit, AfterViewInit {
  @Input() actions: IAction[];
  params: IParam[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<IParam>;
  displayedColumns = [
    'name',
    'value',
  ];

  constructor() { }

  ngOnInit() {
    this.params = this.actions.reduce((pv: IParam[], cv, i) => {
      if (
        cv.paramList == null ||
        cv.paramList.some((param: IParam) => (param.key == null || param.value == null))
      ) {
        return pv;
      }

      return pv.concat(cv.paramList);
    }, []);
    this.dataSource = new MatTableDataSource(this.params || []);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
