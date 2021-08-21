import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { NavCarouselComponent } from './nav-carousel.component';
@NgModule({
  declarations: [
    NavCarouselComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    CommonModule
  ],
  exports: [
    NavCarouselComponent
  ]
})
export class NavCarouselModule { }