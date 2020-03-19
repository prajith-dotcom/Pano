import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {
  PanLogComplaintComponent,
 } from '../../pan-transactions/pan-log-complaint/pan-log-complaint.component';

@Component({
  selector: 'pan-pan-ticket-submitted-modal',
  templateUrl: './pan-ticket-submitted-modal.component.html',
  styleUrls: ['./pan-ticket-submitted-modal.component.scss'],
})
export class PanTicketSubmittedModalComponent implements OnInit {
  message = this.data.message;

  constructor(
    public dialogRef: MatDialogRef<PanLogComplaintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
