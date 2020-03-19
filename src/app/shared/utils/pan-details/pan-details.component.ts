import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pan-details',
  templateUrl: './pan-details.component.html',
  styleUrls: ['./pan-details.component.scss'],
})
export class PanDetailsComponent implements OnInit {
  @Input() rows;
  _model: any;
  _state: string;

  @Output() modelChange = new EventEmitter<any>();
  @Output() stateChange = new EventEmitter<string>();

  @Input()
  get model() {
    return this._model;
  }

  set model(data) {
    this._model = data;
    this.modelChange.emit(this._model);
  }

  @Input()
  get state() {
    return this._state;
  }

  set state(data) {
    this._state = data;
    this.stateChange.emit(this._state);
  }

  constructor() { }

  ngOnInit() {
  }

  getNested(theObject, path, nested) {
    if (nested) {
      return theObject[nested][path];
    }
    try {
      const sep = '.';
      return path.
      replace('[', sep).replace(']', '').
      split(sep).
      reduce(
        (obj, property) => {
          return obj[property] || 'N/A';
        }, theObject,
      );

    } catch (err) {
      return undefined;
    }
  }
}
