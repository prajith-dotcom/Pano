import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pan-dash',
  templateUrl: './pan-dash.component.html',
  styleUrls: ['./pan-dash.component.scss'],
})
export class PanDashComponent implements OnInit {
  configVal: any;

  @Input()
  get config() {
    return this.configVal;
  }

  @Output() conifgChange = new EventEmitter();

  set config(data: any) {
    this.config = data;
    this.conifgChange.emit(this.configVal);
  }

  constructor() { }

  ngOnInit() {
  }

}
