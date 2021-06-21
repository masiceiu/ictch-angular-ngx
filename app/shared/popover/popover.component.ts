import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  html = `<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;
  constructor() { }

  ngOnInit() {
  }

}