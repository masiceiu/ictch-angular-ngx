import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rnd',
  templateUrl: './rnd.component.html',
  styleUrls: ['./rnd.component.css']
})
export class RndComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  component = ['navbar','carousel-button'];
  activeComponent = 'navbar';
  onComponent(component:string){
    this.activeComponent = component;
  }
}