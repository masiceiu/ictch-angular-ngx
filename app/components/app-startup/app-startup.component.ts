import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-startup',
  templateUrl: './app-startup.component.html',
  styleUrls: ['./app-startup.component.css']
})
export class AppStartupComponent implements OnInit {

  @Input() title:any="";
  constructor() { }

  ngOnInit() {
  }

}