import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offcanvas-test',
  templateUrl: './offcanvas-test.component.html',
  styleUrls: ['./offcanvas-test.component.css']
})
export class OffcanvasTestComponent implements OnInit {
/*
body {
  padding-top: 56px;
}
*/
  isOffcanvas=false;
  constructor() { }

  ngOnInit() {
  }

  onOffcanvasClick = function(){
    this.isOffcanvas = !this.isOffcanvas;
  }
}