import { Component, DoCheck, ViewChild } from '@angular/core';
import { FilterTicketsService } from '../../services/filter-tickets.service';
import { ITicket } from '../../../../pan-typings/ticket';
import { BaseChartDirective } from 'ng2-charts';
import { UserService } from '../../services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'pan-user-statistics',
  templateUrl: './pan-user-statistics.component.html',
  styleUrls: ['./pan-user-statistics.component.scss'],
})
export class PanUserStatisticsComponent implements DoCheck {
  selectedStatus = 'All';
  user = UserService.isLoggedIn();
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  statuses = [
    {
      name: 'All',
    },
    {
      name: 'Assigned to Me',
    },
    {
      name: 'Assigned to My Group',
    },
  ];

  statusesList = [
    {
      name: 'Open',
    },
    {
      name: 'Resolved',
    },
    {
      name: 'Escalated',
    },
    {
      name: 'Closed',
    },
    {
      name: 'Threatened',
    },
    {
      name: 'Missed',
    },
    {
      name: 'Safe',
    },
  ];
  slaChartLabels = [
    'Threatened',
    'Missed',
    'Safe',
  ];
  statusChartLabels = ['Open', 'Assigned', 'Resolved', 'Escalated', 'Closed'];
  statusChartData: number[] = [];
  slaChartData: number[] = [];
  doughnutChartType = 'doughnut';
  colors = [
    {
      backgroundColor: [
        '#e0e0e0',
        '#8BC34A',
        '#689f38',
        '#FF3D00',
        '#558B2F',
      ],
    },
  ];
  chartOptions = {
    legend: { position: 'bottom' },
  };

  chartClicked(e: any): void {
    if (e.active.length < 1) { return; }
    const selectedStatus = this.statusChartLabels[e.active[0]._index];
    this.selectedStatus = selectedStatus;

    FilterTicketsService.filteredTickets = FilterTicketsService.tickets
      .filter(ticket => selectedStatus === ticket.status.description);
  }

  slaChartClicked(e: any): void {
    if (e.active.length < 1) { return; }
    const selectedSLAStatus = this.slaChartLabels[e.active[0]._index];
    this.selectedStatus = selectedSLAStatus;
    FilterTicketsService.filteredTickets = {
      Missed: FilterTicketsService.filteredTickets
        .filter(
          ticket =>
            moment()
            .isAfter(moment(ticket.sla)) &&
            ticket.status.description !== 'Closed',
        ),
      Threatened: FilterTicketsService.filteredTickets
        .filter(
          ticket =>
            moment()
            .diff(moment(ticket.sla), 'days') < 7 &&
            ticket.status.description !== 'Closed',
        ),
      Safe: FilterTicketsService.filteredTickets
      .filter(
        ticket =>
          moment()
          .subtract(7, 'd')
          .isBefore(moment(ticket.sla)) &&
          ticket.status.description !== 'Closed',
        ),
    }[selectedSLAStatus];
  }

  statusSelected(status: any): void {
    this.selectedStatus = status;
    const { group: { code }, userNumber } = this.user;

    const statusCtrl = {
      All: FilterTicketsService.tickets,
      'Assigned to Me': FilterTicketsService.tickets
              .filter(ticket => ticket.assignTo.user.code === userNumber),
      'Assigned to My Group': FilterTicketsService.tickets
              .filter(ticket => ticket.assignTo.group.code === code),
      Open: FilterTicketsService.tickets
              .filter(ticket => this.selectedStatus === ticket.status.description),
      Resolved: FilterTicketsService.tickets
              .filter(ticket => this.selectedStatus === ticket.status.description),
      Escalated: FilterTicketsService.tickets
              .filter(ticket => this.selectedStatus === ticket.status.description),
      Closed: FilterTicketsService.tickets
              .filter((ticket: ITicket) => this.selectedStatus === ticket.status.description),
      Missed: FilterTicketsService.tickets
              .filter(ticket =>
                  moment()
                  .isAfter(moment(ticket.sla)) &&
                  ticket.status.description !== 'Closed'),
      Threatened: FilterTicketsService.tickets
              .filter(ticket =>
                  moment()
                  .diff(moment(ticket.sla), 'days') < 7 &&
                  ticket.status.description !== 'Closed'),
      Safe: FilterTicketsService.tickets
              .filter(ticket =>
                  moment()
                  .subtract(7, 'd')
                  .isAfter(moment(ticket.sla)) &&
                  ticket.status.description !== 'Closed'),
    };

    FilterTicketsService.filteredTickets = (statusCtrl[status] || statusCtrl.All);
  }

  constructor() { }

  ngDoCheck() {
    this.setChartData(FilterTicketsService.filteredTickets);
  }

  setChartData(tickets: ITicket[]) {
    if (tickets == null) { return; }
    const statuses = [
      'Open',
      'Assigned',
      'Resolved',
      'Escalated',
      'Closed',
    ];

    this.statusChartData = statuses
      .reduce((pV, cV) => {
        pV.push(tickets.filter((ticket: ITicket) => ticket.status.description === cV).length);
        return pV;
      }, []);

    this.slaChartData = [
      tickets
        .filter(
          ticket =>
            moment()
            .diff(moment(ticket.sla), 'days') < 7 &&
            ticket.status.description !== 'Closed',
      ).length,
      tickets
        .filter(
          ticket =>
            moment()
            .isAfter(moment(ticket.sla)) &&
            ticket.status.description !== 'Closed',
      ).length,
      tickets
        .filter(
          ticket =>
            moment()
            .add(7, 'd')
            .isBefore(moment(ticket.sla)) &&
            ticket.status.description !== 'Closed',
        ).length,
    ];
  }

}
