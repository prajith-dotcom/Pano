import { Component, OnInit, DoCheck, ViewChild, AfterViewInit } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';
import { ICustomer } from '../../../pan-typings/customer';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'pan-pan-search',
  templateUrl: './pan-search.component.html',
  styleUrls: ['./pan-search.component.scss'],
  providers: [SearchService],
})
export class PanSearchComponent implements OnInit, DoCheck, AfterViewInit {
  customers: ICustomer[] = [];
  dataSource: MatTableDataSource<any>;
  displayedColumns = [
    'customerName',
    'customerNumber',
    'birthDate',
    'ssn',
    'status',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public router: Router) { }

  ngOnInit() {
    this.customers = SearchService.customers ? SearchService.customers : [];
    this.dataSource = new MatTableDataSource(this.customers);
    this.dataSource.paginator = this.paginator;
  }

  ngDoCheck() {
    this.customers = SearchService.customers ? SearchService.customers : [];
    this.dataSource = new MatTableDataSource(this.customers);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  setCustomer(customer: ICustomer) {
    SearchService.customer = customer;
    this.router.navigateByUrl('/layout/customer');
  }

}
