import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.css']
})
export class LinearComponent  implements AfterViewInit, OnInit {

  name = 'Angular   6';
  canvas: any;
  ctx: any;
  nativeElement: any;
  //@ViewChild('mychart') mychart;
  @ViewChild('mychart', { static: false }) private mychart!: ElementRef;
  constructor() { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
      type: 'line',
      
      data: {
        datasets: [{
          label: 'Höhenlinie',
          backgroundColor: "rgba(255, 99, 132,0.4)",
          borderColor: "rgb(255, 99, 132)",
          fill: true,
          data: [
            { x: 1, y: 2 },
            { x: 2500, y: 2.5 },
            { x: 3000, y: 5 },
            { x: 3400, y: 4.75 },
            { x: 3600, y: 4.75 },
            { x: 5200, y: 6 },
            { x: 6000, y: 9 },
            { x: 7100, y: 6 },
          ],
        }]
      },
      options: {       
        aspectRatio: 1,
        responsive: false,
        maintainAspectRatio: true/*,
        title: {
          display: true,
          text: 'Höhenlinie'
        },
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            ticks: {
              //autoSkip: false
              userCallback: function (tick) {
                if (tick >= 1000) {
                  return (tick / 1000).toString() + 'km';
                }
                return tick.toString() + 'm';
              }
            },
            scaleLabel: {
              labelString: 'Länge',
              display: true,
            }
          }],
          yAxes: [{
            type: 'linear',
            ticks: {
              //autoSkip: false
             userCallback: function (tick) {
                return tick.toString() + 'm';
              }
            },
            scaleLabel: {
              labelString: 'Höhe',
              display: true
            }
          }]
        }*/
      }
    });
  }
}
