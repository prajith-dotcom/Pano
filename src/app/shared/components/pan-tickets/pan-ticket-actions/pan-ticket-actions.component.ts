import {
  Component,
  ViewChild,
  ElementRef,
  Renderer,
  Input,
  Output,
  EventEmitter,
 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatDialog, MatSnackBar, MatAutocompleteSelectedEvent } from '@angular/material';
import { PanTakeActionComponent } from './pan-take-action/pan-take-action.component';
import { ITicket } from '../../../../../pan-typings/ticket';
import { ActionConfig } from './config';

@Component({
  selector: 'pan-ticket-actions',
  templateUrl: './pan-ticket-actions.component.html',
  styleUrls: ['./pan-ticket-actions.component.scss'],
})
export class PanTicketActionsComponent {
  @Input() ticket: ITicket;
  @Output() actionSubmitted = new EventEmitter<any>();

  actionCtrl = new FormControl();
  filteredActions: Observable<any[]>;
  actions = [...ActionConfig.actions];
  @ViewChild('actionInput') actionInput: ElementRef;

  constructor(public dialog: MatDialog, private renderer: Renderer, public snackBar: MatSnackBar) {
    this.filteredActions = this.actionCtrl.valueChanges
      .pipe(
        startWith(''),
        map(action => action ? this.filterActions(action) : this.actions.slice()),
      );
  }

  filterActions(val: any): any[] {
    if (val && val.name) {
      return [];
    }

    return val ?
      this.actions.filter(a => a.name.toLowerCase().indexOf(val.toLowerCase()) === 0) :
      this.actions;
  }

  openActionDialog(e: MatAutocompleteSelectedEvent): void {
    this.actionCtrl.setValue('');
    this.renderer.invokeElementMethod(
      this.actionInput.nativeElement, 'blur', []);
    const dialogRef = this.dialog.open(PanTakeActionComponent, {
      minHeight: '400px',
      maxHeight: '1200px',
      width: '500px',
      closeOnNavigation: true,
      data: { action: e.option.value, ticket: this.ticket },
    });
    dialogRef.afterClosed()
      .subscribe((res) => {
        if (res == null) { return; }
        this.actionSubmitted.emit('updated');
        this.snackBar.open(res, 'dismiss', { duration: 3000 });
      });
  }

  displayFn(val: any): any {
    return val ? val.name : val;
  }

}
