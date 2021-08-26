import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-nav-carousel',
  templateUrl: './nav-carousel.component.html',
  styleUrls: ['./nav-carousel.component.css']
})
export class NavCarouselComponent implements OnInit, AfterViewInit {
  @Input() size: any = '';
  itemsPerSlide = 0;
  constructor(private cdRef: ChangeDetectorRef) { 
    
  }

  ngOnInit() {}
  /*
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
  }*/
  @HostListener('window:resize', [])
  onResize() {
    this.detectScreenSize('hos:');
  }

  ngAfterViewInit() {
    this.detectScreenSize('init:');
    this.cdRef.detectChanges();
  }
  detectScreenSize(log: any) {
    (function detectChanges(self) {
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
      text: 'বাংলা হাদিস',
      url: 'https://www.hadithbd.com/',
      image:''
    },
    {
      text: 'ইমাম বাতায়ন',
      url: 'http://imam.gov.bd/',
      image:''
    },
    {
      text: 'ইসলাম জিজ্ঞাসা',
      url: 'https://islamqa.info/bn',
      image:''
    },
    {
      text: 'TANZIL QURAN',
      url: 'https://tanzil.net/',
      image:''
    },/*
    {
      text: 'Islamway',
      url: 'https://en.islamway.net/',
      image:''
    }*/
  ];

  slides1 = [
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
