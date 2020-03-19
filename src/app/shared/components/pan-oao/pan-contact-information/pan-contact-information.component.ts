import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';
import { TransactionConfig } from '../../pan-transactions/config';

@Component({
  selector: 'pan-contact-information',
  templateUrl: './pan-contact-information.component.html',
  styleUrls: ['./pan-contact-information.component.scss'],
})
export class PanContactInformationComponent implements OnInit {
  public form: FormGroup;
  states = TransactionConfig.stateList;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.form = this.controlContainer.control as FormGroup;
  }
}
