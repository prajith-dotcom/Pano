import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  Output,
  EventEmitter,
  DoCheck,
  OnChanges,
  SimpleChanges,
 } from '@angular/core';
import { ITicket } from '../../../../../pan-typings/ticket';
import { MatTableDataSource, PageEvent, MatSnackBar } from '@angular/material';
import { PanoramaQ as Q } from '../../../services/q.service';
import { TicketListConfig } from './config';
import { FilterTicketsService } from '../../../services/filter-tickets.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'pan-tickets-list',
  templateUrl: './pan-tickets-list.component.html',
  styleUrls: ['./pan-tickets-list.component.scss'],
})
export class PanTicketsListComponent implements OnInit, OnChanges, DoCheck, AfterViewInit {
  @Input() ticketFilters: any;

  tickets: ITicket[];
  dataSource: MatTableDataSource<ITicket>;
  state = 'idle';
  displayedColumns = [
    'status',
    'ticketNumber',
    'dateReceived',
    'sla',
    'assigned',
    'source',
    'groupAssigned',
  ];
  filters = {
    ticketNumber: '',
    fromDate: '',
    toDate: '',
    group: '',
    stats: '123132',
  };
  filterState = 'idle';
  pageLength;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25, 100];
  user = UserService.isLoggedIn();

  @Output() selectedTicketChange = new EventEmitter();
  @Output() selectedTicketFilterChange = new EventEmitter();

  @Input()
  get selectedTicket() {
    return this.selectedTicket;
  }

  set selectedTicket(data) {
    if (!data) {
      this.selectedTicketChange.emit(data);
      return;
    }
    this.state = 'loading';
    let _ticket: ITicket;
    Q.tickets.get(data.ticketNumber)
      .subscribe(
        ticket => _ticket = ticket,
        err => console.log(err),
        () => {
          this.selectedTicketChange.emit(_ticket);
          this.state = 'idle';
        },
      );
  }

  @Input() selectedTicketFilter;

  constructor(public snackBar: MatSnackBar) { }

  ngDoCheck(): void {
    if (
      this.dataSource == null ||
      !FilterTicketsService.filteredTickets ||
      FilterTicketsService.filteredTickets.length === this.tickets.length
    ) { return; }

    this.tickets =
    FilterTicketsService.filteredTickets
      .filter(ticket => this.createFilter(ticket, this.filters));
    this.setPageData(this.tickets, 0);
  }

  ngOnInit(): void {
    this.state = 'loading';
    this.getTickets();
  }

  ngAfterViewInit(): void {
    this.state = 'loading';
    this.getTickets();
  }

  ngOnChanges() {
    this.getTickets();
  }

  onFilterInputChange(): void {
    const filteredTickets = this.tickets.filter(
      ticket =>  this.createFilter(ticket, this.filters),
    );
    this.setPageData(filteredTickets, 0);
    this.filterState = 'filtered';
  }

  getTickets() {
    Q.tickets.getAll(false)
      .subscribe(
        tickets => this.initializeTickets(tickets),
        err => this.handleError(err),
        () => this.createDataSource(),
      );
  }

  resetFilters(): void {
    Object.keys(this.filters).forEach((filter) => {
      this.filters[filter] = '';
    });
    this.onFilterInputChange();
    this.filterState = 'idle';
  }

  createFilter(data: ITicket, filter: any): boolean {
    return Object.keys(TicketListConfig.filters)
      .every(val => TicketListConfig.filters[val](data, filter[val]));
  }

  setToNAIfUndefined(value: string): string {
    if (value == null) { return 'N/A'; }
    return value;
  }

  pageChanged(e: PageEvent): void {
    this.setPageData(this.tickets, e.pageIndex, e.pageSize);
  }

  setPageData(
    tickets: ITicket[] = this.tickets,
    index: number = 0 ,
    pageSize: number = this.pageSize,
  ): void {
    this.pageIndex = index;
    this.pageSize = pageSize;
    this.pageLength = tickets.length;
    const range = {
      min: this.pageIndex * this.pageSize,
      max: (this.pageIndex * this.pageSize) + this.pageSize,
    };
    const newData = tickets.slice(range.min, range.max);
    this.dataSource.data = newData;
  }

  initializeTickets(tickets: ITicket[]): void {
    this.tickets = tickets.sort((a, b) =>  +new Date(b.receivedDate) - +new Date(a.receivedDate));
    Object.assign(FilterTicketsService, {
      tickets: this.tickets,
      filteredTickets: this.tickets,
    });
  }

  createDataSource(): void {
    Object.assign(this, {
      dataSource: new MatTableDataSource<ITicket>(this.tickets.slice(0, 5)),
      pageLength: this.tickets.length,
      state: 'idle',
    });
  }

  handleError(err): void {
    console.log(err);
    this.state = 'idle';
    this.snackBar.open('Error Retrieving Tickets', 'Dismiss', {
      duration: 3000,
    });
  }
}
