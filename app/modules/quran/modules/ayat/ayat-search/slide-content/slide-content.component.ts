import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.css']
})
export class SlideContentComponent implements OnInit {
  toggler:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.toggler = !this.toggler;
  }

}