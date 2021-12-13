import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, OnInit } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartData,
  ChartDataset,
  ChartOptions,
  ChartType,
  Plugin,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineController,
  LineElement,
} from 'chart.js';

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  isNextPage: boolean;
  isPrevPage: boolean;
}

const defaultPaginationInfo: PaginationInfo = {
  currentPage: 1,
  totalPages: 1,
  isNextPage: false,
  isPrevPage: false,
};
// const backgroundColorPlugin = {
//   id: 'custom_canvas_background_color',
//   beforeDraw: (chart) => {
//     const ctx = chart.canvas.getContext('2d');
//     // ctx.save();
//     ctx.globalCompositeOperation = 'destination-over';
//     ctx.fillStyle = 'lightgray';
//     ctx.fillRect(1110, 1110, chart.width, chart.height);
//     ctx.restore();
//   }
// };

Chart.register(CategoryScale, LinearScale, BarController, BarElement, LineController, LineElement);

@Component({
  selector: 'app-chart-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ChartViewerComponent implements OnChanges, OnInit {

  @Input() chartType!: ChartType;
  @Input() chartData!: ChartData;
  @Input() chartOptions!: ChartOptions;
  @Input() chartPlugins: Plugin[] = [];
  @Input() isPagination = false;
  @Input() pageLimit!: number;

  @ViewChild('chartRef', { static: true }) chartRef!: ElementRef;

  chart!: Chart;
  paginationInfo: PaginationInfo = defaultPaginationInfo;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const chartData = changes['chartData']?.currentValue;

    if (chartData) {
      this.paginationInfo = this.initPaginationInfo(chartData, this.isPagination, this.pageLimit);
      this.createChart(chartData, this.paginationInfo);
    }
  }

  goNextPage() {
    if (!this.isPagination) {
      return;
    }

    const { currentPage, totalPages } = this.paginationInfo;

    if (currentPage < totalPages) {
      const newPage = currentPage + 1;

      this.paginationInfo = {
        ...this.paginationInfo,
        currentPage: newPage,
        isNextPage: newPage < totalPages,
        isPrevPage: newPage > 1,
      };
    } else {
      this.paginationInfo = {
        ...this.paginationInfo,
        isNextPage: false,
        isPrevPage: currentPage > 1,
      };
    }

    this.createChart(this.chartData, this.paginationInfo);
  }

  goPrevPage() {
    if (!this.isPagination) {
      return;
    }

    const { currentPage, totalPages } = this.paginationInfo;

    if (currentPage > 1) {
      const newPage = currentPage - 1;

      this.paginationInfo = {
        ...this.paginationInfo,
        currentPage: newPage,
        isPrevPage: newPage !== 1,
        isNextPage: newPage < totalPages,
      };
    } else {
      this.paginationInfo = {
        ...this.paginationInfo,
        isPrevPage: false,
        isNextPage: currentPage < totalPages,
      };
    }

    this.createChart(this.chartData, this.paginationInfo);
  }

  private createChart(chartData: ChartData, paginationInfo: PaginationInfo): void {
    if (this.chart) {
      this.chart.destroy();
    }

    if (!this.ctx || !chartData) {
      return;
    }

    const currentPageData = this.getCurrentPageChartData(chartData, paginationInfo, this.pageLimit);
    console.log('hello', currentPageData);
    const chartConfiguration: ChartConfiguration = {
      type: this.chartType,
      data: currentPageData,
      options: this.chartOptions,
      plugins: this.chartPlugins,
    };

    this.chart = new Chart(this.ctx, chartConfiguration);
  }

  private get ctx(): CanvasRenderingContext2D {
    return (this.chartRef.nativeElement as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
  }

  private initPaginationInfo(chartData: ChartData, isPagination: boolean, pageLimit: number): PaginationInfo {
    const listLength = chartData?.labels?.length;

    if (!isPagination || !listLength || !pageLimit || listLength <= pageLimit) {
      return defaultPaginationInfo;
    }

    return {
      ...defaultPaginationInfo,
      totalPages: Math.ceil(listLength / pageLimit),
      isNextPage: true,
    };
  }

  private getCurrentPageChartData(chartData: ChartData, paginationInfo: PaginationInfo, pageLimit: number): ChartData {
    const { totalPages, currentPage } = paginationInfo;

    if (totalPages === 1 || !pageLimit) {
      return chartData;
    }

    const { labels, datasets } = chartData;
    const chunks = (array:any[], size:any) => {
      const results = [];

      while (array.length) {
        results.push(array.splice(0, size));
      }

      return results;
    };
    const currentPageLabels = chunks([{...labels}], pageLimit)[currentPage - 1];
    const currentPageDatasets = datasets.map((dataset: ChartDataset) => ({
      ...dataset,
      data: chunks([...dataset.data], pageLimit)[currentPage - 1],
    }));

    return {
      labels: currentPageLabels,
      datasets: currentPageDatasets,
    };
  }

}
