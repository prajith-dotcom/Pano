import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ITicket } from '../../../../../pan-typings/ticket';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionConfig } from '../config';
import { IAction } from '../../../../../pan-typings/action';
import { ICustomer } from '../../../../../pan-typings/customer';
import { ITransaction } from '../../../../../pan-typings/trasaction';
import { IAccount } from '../../../../../pan-typings/account';
import { PanoramaQ as Q } from '../../../services/q.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'pan-log-complaint',
  templateUrl: './pan-log-complaint.component.html',
  styleUrls: ['./pan-log-complaint.component.scss'],
})
export class PanLogComplaintComponent implements OnInit {
  @ViewChild('stepper') stepper;

  today = new Date();
  ticket: ITicket;
  sources = TransactionConfig.sourceList;
  issues = TransactionConfig.issueList;
  languages = TransactionConfig.languageList;
  transactions = this.data.transactions;
  account = this.data.account;
  completedMessage = 'Canceled';
  state = 'idle';
  user = UserService.isLoggedIn();
  questionnaireAction: IAction;

  disputeForm = new FormGroup({
    source: new FormControl('In Person', Validators.required),
    issue: new FormControl('Dispute', Validators.required),
    groupAssigned: new FormControl('Retail', Validators.required),
    receivedDate: new FormControl(new Date(), Validators.required),
    language: new FormControl('English', Validators.required),
    narrative: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
    contactMethod: new FormControl('Electronic'),
  });

  contactInfoForm = new FormGroup({
    address1: new FormControl(this.data.customer.address.address1, Validators.required),
    address2: new FormControl(this.data.customer.address.address2),
    city: new FormControl(this.data.customer.address.city, Validators.required),
    email: new FormControl(
      this.data.customer.email,
      [Validators.required, Validators.email],
    ),
    country: new FormControl(this.data.customer.address.country, Validators.required),
    state: new FormControl(this.data.customer.address.state, Validators.required),
    postalCode: new FormControl(this.data.customer.address.postalCode, Validators.required),
    phoneNumber: new FormControl(this.data.customer.mobile_phone_number, Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<PanLogComplaintComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      customer: ICustomer,
      transactions: ITransaction[],
      account: IAccount,
    },
  ) { }

  ngOnInit(): void {
    this.today.setDate(this.today.getDate() + 7);
  }

  onNoClick(): void {
    this.dialogRef.close(['cancel']);
  }

  onQuestionnaireStateChange(e: any): void {
    this.state = e.state;
    this.questionnaireAction = e.action;
    this.completedMessage = this.getCompletedMessage(e.type);
  }

  onQuestionnaireCanceled(): void {
    this.dialogRef.close(['cancel']);
  }

  logDispute(): any {
    return {
      0: () => this.stepper.next(),
      1: () => {
        this.ticket = {
          ticketNumber: null,
          complaintFlag: 'T',
          approvalFlag: 'F',
          securityLevelCode: '1000002',
          createdDate: this.disputeForm.get('receivedDate').value.toISOString(),
          receivedDate: this.disputeForm.get('receivedDate').value.toISOString(),
          narrative: this.disputeForm.get('narrative').value,
          assignTo: {
            group: {
              code: this.disputeForm.get('groupAssigned').value.charAt(0),
              description: this.disputeForm.get('groupAssigned').value,
            },
          },
          category: {
            code: this.disputeForm.get('issue').value.charAt(0),
            description: this.disputeForm.get('issue').value,
          },
          status: {
            code: '15000001',
            description: 'Open',
          },
          requestor: {
            ssn: this.data.customer.identification.ssn,
            customerNumber: this.data.customer.customer_number,
            firstName: this.data.customer.legal_name.split(' ')[0],
            lastName: this.data.customer.legal_name.split(' ').pop(),
            sourceApp: this.disputeForm.get('source').value,
          },
          contactMethod: {
            city: this.contactInfoForm.get('city').value,
            country: this.contactInfoForm.get('country').value,
            email: this.contactInfoForm.get('email').value,
            language: {
              code: this.disputeForm.get('language').value,
              description: this.disputeForm.get('language').value,
            },
            medium: {
              code: this.disputeForm.get('contactMethod').value.charAt(0),
              description: this.disputeForm.get('contactMethod').value,
            },
            phoneNumber: this.contactInfoForm.get('phoneNumber').value,
            postalCode: this.contactInfoForm.get('postalCode').value,
            state: this.contactInfoForm.get('state').value,
            street1: this.contactInfoForm.get('address1').value,
            street2: this.contactInfoForm.get('address2').value,
          },
          classification: {
            accountNumber: this.account.id,
            accountStatus: {
              code: 'A',
              description: 'Active',
            },
            accountExtendedStatus: {
              code: 'A',
              description: 'Active',
            },
            product: null,
            subProduct: null,
          },
          transactionList: this.transactions,
          audit: {
            timeCreation: new Date().toISOString(),
            timeModification: new Date().toISOString(),
            userCreation: this.user.username,
          },
          originator: {
            channel: { code: null, description: null },
            costCenterCode: null,
            firstName: null,
            globalId: this.user.username,
            group: {
              code: null,
              description: this.disputeForm.get('groupAssigned').value,
            },
            lastName: null,
            medium: {
              code: null,
              description: null,
            },
          },
          item: {},
          severity: {},
          priority: {},
          attributeList: [],
          attachmentList: [],
          actionList: [],
          taskList: [],
        };
        Q.tickets.post(this.ticket)
          .subscribe(
          ({ entities }) => {
            this.ticket.ticketNumber = entities[0].entityNumber;
          },
          () => {
            this.dialogRef.close(['error']);
          },
          () => {
            this.state = 'in progress';
            this.stepper.next();
          },
        );
      },
      2: () => {
        Q.actions.post(this.questionnaireAction)
        .subscribe(
          res => console.log(res),
          (err) => {
            console.log(err);
            this.dialogRef.close(['error']);
          },
          () => this.dialogRef.close(['success', this.completedMessage]),
        );
      },
    }[this.stepper.selectedIndex]();
  }

  // tslint:disable:max-line-length
  getCompletedMessage(type: string) {
    if (type === 'fraud') {
      return `
      Ticket Number: ${this.ticket.ticketNumber} <br>
      <br>
      In the next few days, we may send you paperwork that is important to the resolution of your claim.
      <br>
      <br>
      Please complete it and return to us in a timely manner, or we may reverse your provisional credit.
      <br>
      <br>
      We will attempt to resolve your dispute quickly. Within 10 business days, you will receive either a provisional credit, a final credit, or purchase invoice final resolution denying your dispute.
      <br>
      <br>
      Depending on the type of transaction, the final resolution may take up to 90 days.
      A replacement card will be mailed to the primary mailing address listed on the account within the next 7 to 10 business days.
      <br>`;
    }
    return `
      Ticket Number: ${this.ticket.ticketNumber} <br>
      <br>
      Visa requires the following items to process dispute claims relating to a return or cancellation:<br>
      <br>
      1. A copy of the receipt for each disputed transaction. <br> <br>
      2. A statement confirming that an attempt was made to resolve the matter with the merchant.
      <br><br>
      Please send these documents to disputeclaimforms@bank.com with your Dispute Ticket Number written on the front of each document.
      `;
  }
}
