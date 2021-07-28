import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  @Input() title:any="";//Popover&nbsp;Title
  html = `<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;
  constructor() { }

  ngOnInit() {
  }

}