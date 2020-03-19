import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';
import { IAccount } from '../../../../../pan-typings/account';

@Component({
  selector: 'pan-fund-account',
  templateUrl: './pan-fund-account.component.html',
  styleUrls: ['./pan-fund-account.component.scss'],
})
export class PanFundAccountComponent implements OnInit {
  form: FormGroup;
  @Input() accounts: IAccount;

  activities = [
    'Cash',
    'Checks',
    'Debit Card and Electronic Transfers within the US',
    'Debit Card and Electronic Transfers Internationally',
    'Send Wires within the US',
    'Send Wires Internationally',
  ];

  occupations = [
    'Agriculture',
    'Architecture',
    'Biological and Biomedical Sciences',
    'Business',
    'Communications and Journalism',
    'Computer Sciences',
    'Culinary Arts and Personal Services',
    'Education',
    'Engineering',
    'Legal',
    'Liberal Arts and Humanities',
    'Mechanic and Repair Technologies',
    'Medical and Health Professions',
    'Other',
    'Physical Sciences',
    'Psychology',
    'Transportation and Distribution',
    'Visual and Performing Arts',
  ];

  incomeSources = [
    'Employment Income',
    'Inheritance',
    'Life Insurance',
    'Sale of Company',
    'Sale of Property',
    'Sale of Investments',
    'Other',
  ];

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.form = this.controlContainer.control as FormGroup;
  }

}
