import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ViewChild,
  AfterViewInit,
  EventEmitter,
  Output,
 } from '@angular/core';
import { ITask } from '../../../../../pan-typings/task';
import { MatTableDataSource, MatPaginator, MatSnackBar, MatDialog } from '@angular/material';
import { TicketConfig } from '../config';
import { ITicket } from '../../../../../pan-typings/ticket';
import {
  PanTakeActionComponent,
 } from '../pan-ticket-actions/pan-take-action/pan-take-action.component';
import { ActionConfig } from '../pan-ticket-actions/config';
import { PanoramaQ as Q } from '../../../services/q.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'pan-tasks-list',
  templateUrl: './pan-tasks-list.component.html',
  styleUrls: ['./pan-tasks-list.component.scss'],
})
export class PanTasksListComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() tasks: ITask[];
  @Input() ticket: ITicket;
  @Output() taskCompleted = new EventEmitter();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  state = 'static';
  rows = TicketConfig.rows;
  selectedTask: ITask;
  dataSource: MatTableDataSource<ITask>;
  user = UserService.isLoggedIn();
  displayedColumns = [
    'status',
    'taskNumber',
    'assigned',
    'description',
    'createdDate',
    'slaDate',
    'action',
    'assign',
  ];

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tasks.sort((a, b) => +new Date(b.createdDate) - +new Date(a.createdDate));
    this.dataSource = new MatTableDataSource(this.tasks);
  }

  ngOnChanges(): void {
    this.tasks.sort((a, b) => +new Date(b.createdDate) - +new Date(a.createdDate));
    this.dataSource = new MatTableDataSource(this.tasks);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  setToNAIfUndefined(value: string): string {
    if (value == null) { return 'N/A'; }
    return value;
  }

  taskComplete(e: any): void {
    this.taskCompleted.emit('completed');
  }

  openActionDialog(selectedAction: string, taskNumber) {
    const action = selectedAction === 'close' ?
    { taskNumber, code: '1008', name: 'Close Task', formControl: 'taskNumber' } :
    { taskNumber, code: '1006', name: 'Assign Task', formControl: 'user', task: true };
    const dialogRef = this.dialog.open(PanTakeActionComponent, {
      minHeight: '400px',
      maxHeight: '1200px',
      width: '500px',
      closeOnNavigation: true,
      data: { action, ticket: this.ticket },
    });
    dialogRef.afterClosed()
      .subscribe((res) => {
        if (res == null) { return; }
        this.taskComplete('success');
        this.snackBar.open(
          res,
          'dismiss',
          {
            duration: 3000,
          },
        );
      });
  }

  claimTask(task: ITask): void {
    const action = { ...ActionConfig.action };
    Object.assign(action, {
      actionCode: '1006',
      actionTime: new Date().toISOString(),
      taskNumber: task.taskNumber,
      ticketNumber: this.ticket.ticketNumber,
      narrative: `Task Assigned to ${this.user.username}`,
      globalId: this.user.username,
      assignTo: {
        firstName: null,
        lastName: null,
        user: {
          code: this.user.userNumber,
          description: this.user.username,
        },
        group: {
          code: null,
          description: null,
        },
      },
      level: {
        code: '1006',
        description: 'Task Assigned',
      },
      type: {
        code: '1006',
        description: 'Task Assigned',
      },
    });
    Q.actions.post(action)
    .subscribe(
      res => console.log(res),
      err => console.log(err),
      () => this.taskComplete('claimed'),
    );

  }

}
