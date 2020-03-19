import { Component } from '@angular/core';
import { StatsConfig } from './config';

@Component({
  selector: 'pan-pan-stats',
  templateUrl: './pan-stats.component.html',
  styleUrls: ['./pan-stats.component.scss'],
})
export class PanStatsComponent {
  selectedToggleValue = 'Monthly';
  lineChartLabels = StatsConfig.times.Monthly;
  timePeriods = StatsConfig.timePeriods;
  crossSaleChartLabels = StatsConfig.accountStatLabels;
  accountActivityLabels = StatsConfig.accountActivityLabels;
  chartOptions = {
    legend: { position: 'bottom' },
  };
  customerChartType = 'bar';
  years = [
    '2018',
    '2017',
    '2016',
    '2015',
  ];
  yearSelected = '2018';
  chartType = 'line';
  crossSaleChartData = [1000, 1765];
  accountActivityData = [100, 1000, 2300];
  barChartData = [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 23],
      label: 'Checking',
      fill: false,
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90, 56],
      label: 'Savings',
      fill: false,
    },
  ];
  acctClosingChartData = [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 23],
      label: 'Accounts Closed',
      fill: false,
    },
  ];
  customerBarChartData = [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 23],
      label: 'Non Consumer',
      fill: false,
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90, 56],
      label: 'Consumer',
      fill: false,
    },
  ];

  constructor() { }

  toggleChanged(selectedToggleValue: string): void {
    const years = StatsConfig.timeFilters[selectedToggleValue] || this.years;
    const [yearSelected] = years;
    Object.assign(this, {
      years,
      selectedToggleValue,
      yearSelected,
      lineChartLabels: StatsConfig.times[selectedToggleValue],
    });
  }
}
