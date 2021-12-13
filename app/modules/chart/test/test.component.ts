import { Component, OnInit, VERSION } from '@angular/core';
import { ChartOptions, TooltipItem, Chart } from 'chart.js';
import { filter } from 'rxjs/operators';

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'april',
  'may',
  'jun',
  'july',
  'aug',
  'sept'
];
const tooltipPlugin = Chart.registry.getPlugin('tooltip') as any;

tooltipPlugin.positioners.verticallyCenter = (elements:any, position:any) => {
  if (!elements.length) {
    return tooltipPlugin.positioners.average(elements);
  }
  const { x, y, base, width } = elements[0].element;
  const height = (base - y) / 2;
  const offset = x + width / 2;
  return {
    x: offset,
    y: y + height
  };
};

const data = {
  labels: labels,
  datasets: [
    {
      maxBarThickness: 40,
      label: '',
      data: [50, 20, 30, 75, 30, 60, 70, 80, 100],
      backgroundColor: 'red'
    }
  ]
};
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = 'Angular ' + VERSION.major;
  data = data;
  options: ChartOptions = {
    aspectRatio: 2,
    layout: {
      padding: {
        top: 0
      }
    },
    responsive: false,
    maintainAspectRatio: true,
    /*scales: {
      y: {
        title: {
          display: false
        },
        axis: 'y',
        grid: {
          display: false,
          drawTicks: false,
          tickLength: 0
        },
        max: 100,

        ticks: {
          major: {
            enabled: false
          },
          padding: 17,
          stepSize: 25,
          callback: (value, index, ticks) => {
            return index === 0 || index === ticks.length - 1 ? '' : `${value}%`;
          }
        },
        afterTickToLabelConversion: first => {
          console.log(first);
        }
      },
      x: {
        title: {
          display: false
        },
        axis: 'x',
        grid: { drawTicks: false },
        ticks: {
          padding: 17
        }
      }
    },*/
    plugins: {
      tooltip: {
        position: 'verticallyCenter' as 'average',
        animation: { duration: 0 },
        callbacks: {
          title: (context: TooltipItem<'bar'>[]) => {
            console.log(context[0].label);
            return context[0].label;
          }
        }
      },
      legend: {
        display: false,
        position: 'bottom'
      },
      title: {
        display: false
      }
    }
  };
}
