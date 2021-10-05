import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { NavCarouselComponent } from './nav-carousel.component';
@NgModule({
  declarations: [
    NavCarouselComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CarouselModule.forRoot(),
  ],
  exports: [
    NavCarouselComponent
  ]
})
export class NavCarouselModule { }