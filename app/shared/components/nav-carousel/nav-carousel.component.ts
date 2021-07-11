import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-carousel',
  templateUrl: './nav-carousel.component.html',
  styleUrls: ['./nav-carousel.component.css']
})
export class NavCarouselComponent implements OnInit, AfterViewInit {
  
  size:any='';
  constructor() {}

  ngOnInit() {}

  @HostListener('window:resize', [])
  onResize() {
    this.detectScreenSize('hos:');
  }

  ngAfterViewInit() {
    this.detectScreenSize('init:');
  }

  detectScreenSize(log:any) {
    (function smoothscroll() {
      let res = {
        width: window.screen.width
      };
      //window.screen.width
      /*outerWidth*/
      if (res.width < 576) {
        this.size = 'Extra small';
      }
      if (res.width >= 576) {
        this.size = 'Small';
      }
      if (res.width >= 768) {
        this.size = 'Medium';
      }
      if (res.width >= 992) {
        this.size = 'Large';
      }
      if (res.width >= 1200) {
        this.size = 'Extra Large';
      }
      console.log(log,this.size);
    })();
  }

  slides = [
    {
      text: 'Item',
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'
    },
    {
      text: 'Item',
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg'
    },
    {
      text: 'Item',
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg'
    },
    {
      text: 'Item',
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg'
    },
    {
      text: 'Item',
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg'
    },
    {
      text: 'Item',
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg'
    },
    {
      text: 'Item',
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg'
    },
    {
      text: 'Item',
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg'
    },
    {
      text: 'Item',
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'
    },
    {
      text: 'Item',
      image:
        'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg'
    }
  ];
}
