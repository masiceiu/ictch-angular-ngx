import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  width = 250;
  height = 250;
  fixedHeight = 100;
  cardHeader = 'Toggi';
  showFooter = true;
  constructor() { 
    //this.cardHeader = 'Toggi';
    //this.showFooter = true;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  ngOnInit() {
  }
  onWindowResize(event:any) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
  }
  /*get getHeight():number{ 
    return this.height-((this.cardHeader?48:0)+(this.showFooter?48:0));
  }*/

}