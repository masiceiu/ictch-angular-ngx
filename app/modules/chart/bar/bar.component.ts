import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements AfterViewInit, OnInit {

  name = 'ChartJs';
  chart: any;
  data: any[] = [{ x: '2016-12-25', y: 20 }, { x: '2016-12-26', y: 10 }];
  @ViewChild('barChart', { static: false }) private chartRef!: ElementRef;
  constructor(private elementRef: ElementRef,private _cdref:ChangeDetectorRef) {
    
  }
  ngAfterViewInit() {

      console.log(this.chartRef.nativeElement);
      this._cdref.detectChanges();
      this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'bar',
        data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      aspectRatio: 1,
      responsive: false,
      maintainAspectRatio: true
      /*
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      },*/
    }
      })
  }

  ngOnInit() {


  }

}
