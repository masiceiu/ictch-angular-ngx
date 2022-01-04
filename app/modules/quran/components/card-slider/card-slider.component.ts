import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {
  
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
  config = {
    icon:["bi bi-microsoft","bi bi-text-indent-left","bi bi-grid-fill","chat-square-dots-fill","bi bi-filter-circle"], 
    bg:["","bg-info text-white","bg-dark text-white"] }; 
  constructor() { 
  }

  ngOnInit() {
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