import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

import { SettingsService } from './settings.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {"(window:resize)":"onWindowResize($event)" }
})
export class AppComponent implements OnInit {

  width = 250;
  height = 250;
  fixedHeight = 100;
  cardHeader = 'Toggi';
  showFooter = true;
  constructor(private settingsService: SettingsService) {
    //this.cardHeader = 'Toggi';
    //this.showFooter = true;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    console.log("settingsService:",settingsService)
  }

  ngOnInit() {
  }
  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
  }
  /*get getHeight():number{ 
    return this.height-((this.cardHeader?48:0)+(this.showFooter?48:0));
  }*/
}