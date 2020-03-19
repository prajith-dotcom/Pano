import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, FormControl } from '@angular/forms';
import { TransactionConfig } from '../../pan-transactions/config';

@Component({
  selector: 'pan-basic-info',
  templateUrl: './pan-basic-info.component.html',
  styleUrls: ['./pan-basic-info.component.scss'],
})
export class PanBasicInfoComponent implements OnInit {
  public form: FormGroup;
  states = TransactionConfig.stateList;
  date = new FormControl(new Date(1998, 2, 1));
  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
  }

}
