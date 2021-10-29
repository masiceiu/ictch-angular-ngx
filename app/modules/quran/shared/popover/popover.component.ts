import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  @Input() switch_on = 0;
  @Input() title:any="";//Popover&nbsp;Title
  @Input() refPopover: TemplateRef<any>;
  html = `<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;
  constructor() { }
  ngOnInit() {
  }

}