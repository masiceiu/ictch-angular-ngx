import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ilm',
  templateUrl: './ilm.component.html',
  styleUrls: ['./ilm.component.css'],
  host: {"(window:resize)":"onWindowResize($event)" }
})
export class IlmComponent implements OnInit {

  width = 250;
  height = 250;
  constructor() { 
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  ngOnInit() {
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
  }
}