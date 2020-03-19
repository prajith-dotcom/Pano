import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanoramaQ as Q } from '../../services/q.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SharedConfig } from '../../config';

@Component({
  selector: 'pan-add-user',
  templateUrl: './pan-add-user.component.html',
  styleUrls: ['./pan-add-user.component.scss'],
})
export class PanAddUserComponent implements OnInit {
  userForm: FormGroup;
  groups = SharedConfig.groups;
  types = SharedConfig.userTypeList;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PanAddUserComponent>,
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      type: ['', Validators.required],
      group: '',
    });
  }

  register() {
    const { value: user } = this.userForm;
    Q.users.post(user)
      .subscribe(
        () => console.log('done'),
        err => console.log(err),
        () => this.dialogRef.close('SUCCESS'),
      );
  }
}
