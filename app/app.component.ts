import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {"(window:resize)":"onWindowResize($event)" }
})
export class AppComponent implements OnInit {

  width = 250;
  height = 250;
  toggled = false;
  fixedHeight = 100;
  cardHeader = 'Toggi';
  showFooter = true;
  
  currentRoute: string;
  constructor(private router: Router) {
    //this.cardHeader = 'Toggi';
    //this.showFooter = true;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.currentRoute = '';
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        console.log('Route change detected');
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.currentRoute = event.url;
        console.log(event);
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.log(event.error);
      }
    });
  }

  ngOnInit() {

  }
  onClick(switch_on:string="", data:any=null) {
    //console.log('click change detected',this.toggled);
    switch(switch_on){
      default:
        break;
    }  
    return false;
  }
  onWindowResize(event:any) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
  }
  /*get getHeight():number{ 
    return this.height-((this.cardHeader?48:0)+(this.showFooter?48:0));
  }*/
}