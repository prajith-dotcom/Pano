import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICustomer } from '../../../../pan-typings/customer';
import { PanoramaQ as Q } from '../../services/q.service';

@Component({
  selector: 'pan-oao',
  templateUrl: './pan-oao.component.html',
  styleUrls: ['./pan-oao.component.scss'],
})
export class PanOaoComponent implements OnInit {
  basicInfoForm: FormGroup;
  contactInfoForm: FormGroup;
  idVerificationForm: FormGroup;
  activityForm: FormGroup;
  fundForm: FormGroup;
  confirmForm: FormGroup;
  customer: ICustomer = this.data.customer;
  name: string[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PanOaoComponent>,
  ) { }

  ngOnInit() {
    this.name = this.customer.legal_name.split(' ');

    this.basicInfoForm = this.fb.group({
      accountType: [
        '',
        Validators.required,
      ],
      accountName: [
        '',
        Validators.required,
      ],
      firstName: [
        this.name[0],
        Validators.required,
      ],
      middleInitial: '',
      lastName: [
        this.name[1],
        Validators.required,
      ],
      suffix: [
        'Mr.',
        Validators.required,
      ],
      dateOfBirth: [
        this.customer.date_of_birth,
        Validators.required,
      ],
      ssn: [
        this.customer.identification.ssn,
        Validators.required,
      ],
      citizenFlag: '',
      idType: [
        'Driver\'s License',
        Validators.required,
      ],
      idNumber: [
        this.customer.identification.idNumber,
        Validators.required,
      ],
      issuedLocation: [
        this.customer.identification.issuedLocation,
        Validators.required,
      ],
      issuedDate: [
        new Date(this.customer.identification.issuedDate),
        Validators.required,
      ],
      expDate: [
        new Date(this.customer.identification.expDate),
        Validators.required,
      ],
    });

    this.contactInfoForm = this.fb.group({
      address1: [
        this.customer.address.address1,
        Validators.required,
      ],
      address2: [this.customer.address.address2],
      city: [this.customer.address.city],
      state: [
        this.customer.address.state,
        Validators.required,
      ],
      postalCode: [
        this.customer.address.postalCode,
        Validators.compose([
          Validators.maxLength(5),
          Validators.minLength(5),
          Validators.required,
        ]),
      ],
      email: [
        this.customer.email,
        Validators.compose([
          Validators.email,
          Validators.required,
        ]),
      ],
      phoneNumber: [
        this.customer.mobile_phone_number,
        Validators.required,
      ],
    });

    this.fundForm = this.fb.group({
      acctActivity: ['', Validators.required],
      occupation: ['', Validators.required],
      sourceOfIncome: ['', Validators.required],
    });
  }

  close() {
    const app = {
      customerNumber: this.customer.customer_number,
      identity: this.basicInfoForm.value,
      contactInfo: this.contactInfoForm.value,
      fund: { account: '', amount: '', ...this.fundForm.value },
    };

    Q.applications.post(app)
      .subscribe(
        () => this.dialogRef.close({ app, result: 'Submitted' }),
        err => console.log(err),
      )
    ;
  }

}
