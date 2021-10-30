import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-nav-scroller',
  templateUrl: './nav-scroller.component.html',
  styleUrls: ['./nav-scroller.component.css']
})
export class NavScrollerComponent implements OnInit {

  @Input() marginClass = 'm-0';
  @Input() paddingClass = 'p-0';
  //@Input() refTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}