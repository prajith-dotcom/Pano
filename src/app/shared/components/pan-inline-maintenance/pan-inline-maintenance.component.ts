import { Component, Input } from '@angular/core';
import { InlineMaintConfig } from './config';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../../services/user.service';
import { ICustomer } from '../../../../pan-typings/customer';
import { PanoramaQ as Q } from '../../services/q.service';

@Component({
  selector: 'pan-inline-maintenance',
  templateUrl: './pan-inline-maintenance.component.html',
  styleUrls: ['./pan-inline-maintenance.component.scss'],
})
export class PanInlineMaintenanceComponent {
  @Input() customer: ICustomer;
  user = UserService.isLoggedIn();
  panelState = 'open';
  name = '';
  state = 'static';
  loadState = 'idle';
  model = this.customer;
  rows = this.user.type.description === 'ADMIN' ?
    InlineMaintConfig.rows :
    InlineMaintConfig.rowsClient;

  toggleEdit() {
    if (this.state === 'editable') {
      this.save();
      return;
    }
    this.state = 'editable';
  }
  constructor(
    public snackBar: MatSnackBar,
  ) {  }

  panelChange(event): void {
    this.panelState = event ?
      'open' : 'closed';
  }

  save() {
    this.loadState = 'loading';
    Q.customers.put(this.customer)
      .subscribe(
        res => console.log(res),
        (err) => {
          this.snackBar.open(
            'Error Updating Customer',
            'dismiss',
            {
              duration: 3000,
            },
          );
          console.log(err);
        },
        () => {
          this.snackBar.open(
            'Customer Updated',
            'dismiss',
            {
              duration: 3000,
            },
          );
          this.loadState = 'idle';
          this.state = 'static';
        },
      );
  }

}
