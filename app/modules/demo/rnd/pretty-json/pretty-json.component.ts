import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pretty-json',
  templateUrl: './pretty-json.component.html',
  styleUrls: ['./pretty-json.component.css']
})
export class PrettyJsonComponent implements OnInit {
  myObj = {name: 'foo', age: 21, items: ['a', 'b']};
  constructor() { }

  ngOnInit() {
  }

}