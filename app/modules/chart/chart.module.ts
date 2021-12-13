import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChartComponent } from './chart.component';

import { PieComponent } from './pie/pie.component';
import { LinearComponent } from './linear/linear.component';
import { BarComponent } from './bar/bar.component';
import { ChartViewerComponent } from './viewer/viewer.component';
import { TestComponent } from './test/test.component';
import { LineComponent } from './line/line.component';
import { PolarComponent } from './polar/polar.component';

const routes: Routes = [
  {
    path: '',
    component: ChartComponent,
    children:[
      {
        path: 'pie',
        component: PieComponent
      },
      {
        path: 'bar',
        component: BarComponent
      },
      {
        path: 'linear',
        component: LinearComponent
      },
      {
        path: 'line',
        component: LineComponent
      },
      {
        path: 'test',
        component: TestComponent
      },
      //{ path: '', redirectTo: 'pie', pathMatch:"full"}
    ],
  }
];
@NgModule({
  declarations: [
    ChartComponent,
    PieComponent,
    LinearComponent,
    BarComponent,
    ChartViewerComponent,
    TestComponent,
    LineComponent,
    PolarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ChartModule { }
