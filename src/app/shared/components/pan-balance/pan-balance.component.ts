import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pan-balance',
  templateUrl: './pan-balance.component.html',
  styleUrls: ['./pan-balance.component.scss'],
})
export class PanBalanceComponent implements OnInit {
  panelState = 'open';

  chartConfig = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
    ],
    chartType: 'line',
    dataset: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 23],
        label: 'Checking',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90, 56],
        label: 'Savings',
      },
    ],
  };

  constructor() { }

  ngOnInit() {
  }

  panelChange(event): void {
    this.panelState = event ?
      'open' : 'closed';
  }

}
