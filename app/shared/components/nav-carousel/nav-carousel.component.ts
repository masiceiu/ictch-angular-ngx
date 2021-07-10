import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-carousel',
  templateUrl: './nav-carousel.component.html',
  styleUrls: ['./nav-carousel.component.css']
})
export class NavCarouselComponent implements OnInit {

  itemsPerSlide = 8;
  singleSlideOffset = true;
  constructor() { }

  ngOnInit() {
  }

  slides = [
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg'}
  ];

}