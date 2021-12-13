import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';

import { Chart } from 'chart.js';

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };
const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: NUMBER_CFG,
    }
  ]
};
const data2 = {
  datasets: [{
    data: [10, 30, 3, 2, 5],
    backgroundColor: ["#000000", "#3B5998", "#a6b1b7", "#1da1f2", "#bd081c"],
    label: 'My dataset', // for legend
  }],
  labels: ["Blog", "Facebook", "Instagram", "Twitter", "Pinterest"],
};
const data3 = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [
    {
      label: "Population (millions)",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  ]
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Polar Area Chart'
    }
  }
};
const config = {
  type: 'polarArea',
  data: data2,
  options: options,
};
@Component({
  selector: 'app-polar',
  templateUrl: './polar.component.html',
  styleUrls: ['./polar.component.css']
})
export class PolarComponent implements AfterViewInit, OnInit {

  name = 'ChartJs';
  chart: any;

  @ViewChild('chartCanvas', { static: false }) private chartRef!: ElementRef;
  constructor(private elementRef: ElementRef, private _cdref: ChangeDetectorRef) {

  }
  ngAfterViewInit() {
    console.log(this.chartRef.nativeElement);
    this._cdref.detectChanges();
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'polarArea',
      data: data3,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Polar Area Chart'
          }
        }
      },
    })
  }

  ngOnInit() {

  }

}
