import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pan-chart',
  templateUrl: './pan-chart.component.html',
  styleUrls: ['./pan-chart.component.scss'],
})
export class PanChartComponent implements OnInit {
  @Input() config: any;
  constructor() { }

  ngOnInit() {
  }

}
