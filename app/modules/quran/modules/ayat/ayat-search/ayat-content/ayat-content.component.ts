import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ayat-content',
  templateUrl: './ayat-content.component.html',
  styleUrls: ['./ayat-content.component.css']
})
export class AyatContentComponent implements OnInit {

  @Input() input:any = {};
  @Output() onItemClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}