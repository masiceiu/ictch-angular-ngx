import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-carousel',
  templateUrl: './nav-carousel.component.html',
  styleUrls: ['./nav-carousel.component.css']
})
export class NavCarouselComponent implements OnInit, AfterViewInit {
  
  size:any='';
  itemsPerSlide = 2;
  itemsPerSlidea = true;
  constructor() {}

  ngOnInit() {}
  /*onItemsPerSlide()
  {
    return this.itemsPerSlide;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
  }*/
/*
@HostListener('window:resize', [])
onResize() {
  //this.detectScreenSize('hos:');
}*/

ngAfterViewInit() {
  //this.detectScreenSize('init:');
}
onItemsPerSlide(): number {
   return (function smoothscroll(self) {
    let res = {
      width: window.innerWidth
    };
    if (res.width < 576) {
      self.size = 'Extra small';
      self.itemsPerSlide = 3;
    }
    if (res.width >= 576) {
      self.size = 'Small';
      self.itemsPerSlide = 4;
    }
    if (res.width >= 768) {
      self.size = 'Medium';
      self.itemsPerSlide = 6;
    }
    if (res.width >= 992) {
      self.size = 'Large';
      self.itemsPerSlide = 8;
    }
    if (res.width >= 1200) {
      self.size = 'Extra Large';
      self.itemsPerSlide = 10;
    }
      console.log( self.size);
      return self.itemsPerSlide
    })(this);
  }
  detectScreenSize(log:any) {
    (function smoothscroll(self) {
      let res = {
        width: window.innerWidth
      };
      if (res.width < 576) {
        self.size = 'Extra small';
        self.itemsPerSlide = 3;
      }
      if (res.width >= 576) {
        self.size = 'Small';
        self.itemsPerSlide = 4;
      }
      if (res.width >= 768) {
        self.size = 'Medium';
        self.itemsPerSlide = 6;
      }
      if (res.width >= 992) {
        self.size = 'Large';
        self.itemsPerSlide = 8;
      }
      if (res.width >= 1200) {
        self.size = 'Extra Large';
        self.itemsPerSlide = 10;
      }
      //console.log(log, self.size);
    })(this);
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
