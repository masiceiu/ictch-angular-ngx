import { Component, ElementRef, OnInit } from '@angular/core';

//import { Chart } from 'chart.js';
import Chart from 'chart.js/auto'
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  chart!: Chart;
  name = 'Angular 5 chartjs';
  constructor(private elementRef: ElementRef) {
    
  }


  ngOnInit(): void {
    this.chartit();
  }
  chartit(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#canvas`);
    this.chart = new Chart(htmlRef, {
      type: 'doughnut',
      data: {
        labels: ['Solicitado', 'Entregado', 'Faltante'],
        datasets: [
          {
            label: 'test',
            data: [
              100, 200, 300
            ],
            backgroundColor: ['#0074D9', '#2ECC40', '#FF4136']
          }
        ]
      },
      options: {       
        aspectRatio: 1,
        responsive: false,
        maintainAspectRatio: true
      }
    });
 }
}

