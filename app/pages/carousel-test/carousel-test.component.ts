import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-test',
  templateUrl: './carousel-test.component.html',
  styleUrls: ['./carousel-test.component.css']
})
export class CarouselTestComponent implements OnInit {
  showIndicator = true;
  switchIndicator(): void {
    this.showIndicator = !this.showIndicator;
  }
  myInterval = 1500;
  activeSlideIndex = 0;
  slideChangeMessage = '';

  log(event: number) {
    this.slideChangeMessage = `Slide has been switched: ${event}`;
  }
  
  slides: { image: string, text:"?" }[] = [];
 
  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }
  ngOnInit() {
  }
  addSlide(): void {
    this.slides.push({
      image: `https://valor-software.com/ngx-bootstrap/old/6.2.0/assets/images/nature/${this.slides.length % 8 + 1}.jpg`,
      text:"?"
    });
  }
 
  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }

}