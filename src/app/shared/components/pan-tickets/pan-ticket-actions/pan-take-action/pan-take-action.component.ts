import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatChipInputEvent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { ActionConfig } from '../config';
import { IAction } from '../../../../../../pan-typings/action';
import { TicketConfig } from '../../config';
import { PanoramaQ as Q } from '../../../../services/q.service';
import { UserService } from '../../../../services/user.service';
import { SharedConfig } from '../../../../config';

@Component({
  selector: 'pan-take-action',
  templateUrl: './pan-take-action.component.html',
  styleUrls: ['./pan-take-action.component.scss'],
})
export class PanTakeActionComponent implements OnInit {
  actionType: any;
  actionForm: FormGroup;
  separatorKeysCodes = [ENTER, COMMA];
  fileToUpload: File = null;
  requireFile = false;
  attributes: any = [];
  user = UserService.isLoggedIn();
  groups = SharedConfig.groups;

  constructor(
    public dialogRef: MatDialogRef<PanTakeActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.actionType = this.data.action;
    this.actionForm = new FormGroup({
      comments: new FormControl('', Validators.required),
    });
    if (this.actionType.code === '1009') { this.requireFile = true; }
    if (this.actionType.task) {
      this.actionForm.controls.taskNumber =
        new FormControl(this.actionType.taskNumber, Validators.required);
    }
    if (!this.actionType.formControl) { return; }
    this.actionForm.controls[this.actionType.formControl] =
      new FormControl(this.getDefaultValue(this.actionType.formControl), Validators.required);
  }

  getDefaultValue(formCtrl: string): string {
    const defaults = {
      user: () => this.user.userNumber,
      taskNumber: () => this.actionType.taskNumber,
      default: () => '',
    };
    return (defaults[formCtrl] || defaults['default'])();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.attributes.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  remove(attribute: any): void {
    const index = this.attributes.indexOf(attribute);

    if (index >= 0) {
      this.attributes.splice(index, 1);
    }
  }

  uploadFile(file: File): void {
    this.fileToUpload = file;
  }

  submitAction(): void {
    const action: IAction = {
      ...ActionConfig.action,
      globalId: this.user.username,
      assignTo: {
        firstName: 'Test',
        lastName: 'User',
        user: {
          code: this.user.userNumber,
          description: this.user.username,
        },
        group: {
          code: '1',
          description: 'RETAIL',
        },
      },
    };
    const actionData = this.actionType.formControl ?
    this.getActionData() : {};
    [
      action,
      actionData,
      {
        ticketNumber: this.data.ticket.ticketNumber,
        actionCode: this.actionType.code,
        actionTime: new Date().toISOString(),
        narrative: this.actionForm.get('comments').value,
        type: {
          code: this.actionType.code,
          description: this.actionType.name,
        },
      },
    ].reduce((p, c) => Object.assign(p, c));
    if (this.fileToUpload !== null) {
      action.paramList =
        action.paramList.concat(TicketConfig.getFileParams(this.fileToUpload, this.user.username));
    }

    Q.actions.post(action)
    .subscribe(
      res => console.log(res),
      () => this.dialogRef.close('Action Failed'),
      () => this.dialogRef.close('Action Preformed'),
    );
  }

  getActionData(): any {
    const actionData = {
      user: (): any => ({
        taskNumber: this.actionType.task ? this.actionForm.get('taskNumber').value : null,
        assignTo: {
          firstName: 'Test',
          lastName: 'User',
          user: {
            code: this.actionForm.get('user').value,
            description: this.user.username,
          },
          group: {
            code: null,
            description: null,
          },
        },
      }),
      group: (): any => ({
        assignTo: {
          firstName: null,
          lastName: null,
          user: {
            code: null,
            description: null,
          },
          group: {
            code: this.actionForm.get('group').value.groupNumber,
            description: this.actionForm.get('group').value.groupName,
          },
        },
      }),
      resolution: (): any => ({
        paramList: [
          {
            key: {
              code: (Math.floor(Math.random() * 90000) + 10000).toString(),
              description: this.actionForm.get('resolution').value,
            },
            value: {
              code: (Math.floor(Math.random() * 90000) + 10000).toString(),
              description: this.actionForm.get('resolution').value,
            },
          },
        ],
      }),
      result: (): any => ({
        paramList: [
          {
            key: {
              code: (Math.floor(Math.random() * 90000) + 10000).toString(),
              description: this.actionForm.get('result').value,
            },
            value: {
              code: (Math.floor(Math.random() * 90000) + 10000).toString(),
              description: this.actionForm.get('result').value,
            },
          },
        ],
      }),
      attributes: (): any => ({
        paramList: this.attributes
        .reduce((params, attr) => {
          params.push({
            key: {
              code: (Math.floor(Math.random() * 90000) + 10000).toString(),
              description: attr,
            },
            value: {
              code: (Math.floor(Math.random() * 90000) + 10000).toString(),
              description: attr,
            },
          });
          return params;
        }, []),
      }),
      taskNumber: (): any => ({
        taskNumber: this.actionForm.get('taskNumber').value,
      }),
    };

    return actionData[this.actionType.formControl]();
  }
}
