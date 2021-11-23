import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {"(window:resize)":"onWindowResize($event)" }
})
export class AppComponent implements OnInit {
  
  @Input() maxHeight = 250;
  @Input() cardHeader = "";
  @Input() showHeader = false;
  @Input() showFooter = false;
  @Input() refFooter: TemplateRef<any>;
  @Input() refHeader: TemplateRef<any>;
  @Input() refContent: TemplateRef<any>;
  @Input() refIndex: TemplateRef<any>;
  @Output() onClick = new EventEmitter<any>();
  @Output() onClickL = new EventEmitter<any>();
  @Output() onClickC = new EventEmitter<any>();
  @Output() onClickR = new EventEmitter<any>();
  doorClassToggled = false;

  width = 250;
  height = 250;
  fixedHeight = 100;
  constructor() { 
    this.cardHeader = 'Toggi';
    this.showFooter = true;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  ngOnInit() {
  }
  get getHeight():number{ 
    return this.height-((this.cardHeader?48:0)+(this.showFooter?48:0));
  }
  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
  }
  public toggleDoor($event:any) {
    $event.preventDefault();
    this.doorClassToggled = !this.doorClassToggled;  
  }
  _onClickL($event:any) 
  {
    $event.preventDefault();
    this.onClickL.emit();
  }
  _onClickC($event:any) 
  {
    $event.preventDefault();
    this.onClickC.emit();
  }
  _onClickR($event:any) 
  {
    $event.preventDefault();
    this.onClickR.emit();
  }
  _onClick($event:any) 
  {
    $event.preventDefault();
    this.onClick.emit();
  }
}