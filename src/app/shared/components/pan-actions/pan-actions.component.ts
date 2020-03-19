import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PanOaoComponent } from '../pan-oao/pan-oao.component';
import { ICustomer } from '../../../../pan-typings/customer';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'pan-actions',
  templateUrl: './pan-actions.component.html',
  styleUrls: ['./pan-actions.component.scss'],
})
export class PanActionsComponent {
  panelState = 'open';
  @Input() customer: ICustomer;
  @Output() applicationSubmitted = new EventEmitter();

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  panelChange(event): void {
    this.panelState = event ?
      'open' : 'closed';
  }

  openOriginationDialog(): void {
    const dialogRef = this.dialog.open(
      PanOaoComponent,
      {
        minHeight: '380px',
        maxHeight: '1200px',
        maxWidth: '800px',
        minWidth: '600px',
        closeOnNavigation: true,
        data: { customer: this.customer },
      });
    dialogRef.afterClosed()
      .subscribe(({ result, app } = { result: 'Canceled' }) => {
        this.snackBar.open(`Application ${result}`, 'dismiss', { duration: 3000 });
        if (app) {
          this.applicationSubmitted.emit(app);
        }
      });
  }

}
