import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  doorClassToggled = false;
  @Input() refContent: TemplateRef<any>;
  @Input() refIndex: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }
  public toggleDoor() {
    this.doorClassToggled = !this.doorClassToggled;  
  }
}