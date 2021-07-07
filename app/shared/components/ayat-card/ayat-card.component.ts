import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayat-card',
  templateUrl: './ayat-card.component.html',
  styleUrls: ['./ayat-card.component.css']
})
export class AyatCardComponent implements OnInit {

  @Input() data: any;
  constructor() {
    this.data = {};
  }

  ngOnInit() {
  }
}