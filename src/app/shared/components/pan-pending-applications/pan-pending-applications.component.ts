import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { ICustomer } from '../../../../pan-typings/customer';
import { MatTableDataSource } from '@angular/material';
import { PanoramaQ as Q } from '../../services/q.service';
import { IApplication } from '../../../../pan-typings/account';

@Component({
  selector: 'pan-pending-applications',
  templateUrl: './pan-pending-applications.component.html',
  styleUrls: ['./pan-pending-applications.component.scss'],
})
export class PanPendingApplicationsComponent implements OnChanges {
  @Input() customer: ICustomer;
  @Input() submittedApp: IApplication;
  panelState = 'open';
  selectedIndex = 0;
  rawApplications: IApplication[] = [];
  applicationDataSource: MatTableDataSource<any>;
  ticketDataSource: MatTableDataSource<any>;
  displayedApplicationColumns = [
    'id',
    'type',
    'status',
  ];
  displayedTicketColumns = [
    'id',
    'status',
  ];

  constructor() { }

  ngOnInit() {
    this.fetchData();
  }

  ngOnChanges() {
    console.log('changes', this.submittedApp);
    this.fetchData();
  }

  fetchData() {
    const { customer_number: customerNumber } = this.customer;
    Q.tickets.getByCustomer(customerNumber, false)
      .subscribe(
        (res: any[]) => {
          const tickets = res.reduce((pV, cV) => {
            const {
              ticketNumber: id,
              status: {
                description: status,
              },
            } = cV;
            pV.push({ id, status });
            return pV;
          }, []);

          this.ticketDataSource = new MatTableDataSource<any>(tickets);
        },
        err => console.log(err),
      );

    Q.applications.getByCustomer(customerNumber, false)
      .subscribe(
        (apps: IApplication[]) => {
          Object.assign(this, {
            rawApplications: apps,
            applicationDataSource: new MatTableDataSource(this.setApplications(apps)),
          });
        },
        err => console.log(err),
      );
  }

  setApplications(apps: IApplication[]) {
    return apps.reduce((pV, cV) => {
      const {
        applicationNumber: id,
        identity: {
          accountType: type,
        },
      } = cV;

      pV.push({
        id,
        type,
        status: 'Received',
      });
      return pV;
    }, []);
  }

  panelChange(event): void {
    this.panelState = event ?
      'open' : 'closed';
  }

}
