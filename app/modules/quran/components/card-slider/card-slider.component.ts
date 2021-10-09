import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {
  
  @Input() maxHeight = 250;
  @Input() cardHeader = "";
  @Input() cardFooter = "";
  @Input() refFooter: TemplateRef<any>;
  @Input() refHeader: TemplateRef<any>;
  @Input() refContent: TemplateRef<any>;
  @Input() refIndex: TemplateRef<any>;
  doorClassToggled = false;
  constructor() { 
    
  }

  ngOnInit() {
  }
  public toggleDoor() {
    this.doorClassToggled = !this.doorClassToggled;  
  }
}