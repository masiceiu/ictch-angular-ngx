import { Component, OnInit } from '@angular/core';
import {Subject } from 'rxjs';

@Component({
  selector: 'app-ilm',
  templateUrl: './ilm.component.html',
  styleUrls: ['./ilm.component.css'],
  host: {"(window:resize)":"onWindowResize($event)" }
})
export class IlmComponent implements OnInit {

  width = 250;
  height = 250;
  fixedHeight = 100;
  dataSync = new Subject<string>();
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
  onClick(data:any, switch_on:string): void {
    switch (switch_on) {
      case 'left': 
        //this.dataSync.next('');
        break;
    }
  }
}