import { Component, Input, OnInit, TemplateRef,  } from '@angular/core';

@Component({
  selector: 'app-side-slider',
  templateUrl: './side-slider.component.html',
  styleUrls: ['./side-slider.component.css']
})
export class SideSliderComponent implements OnInit {

  toggler:boolean = true;//style="top: 34px;"
  @Input() positionTop = 0;
  @Input() icon = "";
  @Input() iconMarginTop = 0;
  @Input() refTemplate: TemplateRef<any>;
  /*@ViewChild('templateRef', { read: TemplateRef }) templateRef:TemplateRef<any>;
  constructor(private vref:ViewContainerRef) {
  }
  ngAfterViewInit() {
    this.vref.createEmbeddedView(this.templateRef);
  }*/

  ngOnInit() {
  }

  toggle(){
    this.toggler = !this.toggler;
  }
}