import { Component, EventEmitter, Input, OnInit, Output, TemplateRef,  } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-side-slider',
  templateUrl: './side-slider.component.html',
  styleUrls: ['./side-slider.component.css']
})
export class SideSliderComponent implements OnInit {

  toggler:boolean = true;//style="top: 34px;"
  @Input() positionTop = 35;
  @Input() icon = "";
  @Input() iconMarginTop = 0;
  @Input() hideToggleIcon = false;
  @Input() refTemplate: TemplateRef<any>;
  @Input() dataSync = new Subject<any>();
  //@Output() onItemClick = new EventEmitter<any>();
  /*@ViewChild('templateRef', { read: TemplateRef }) templateRef:TemplateRef<any>;
  constructor(private vref:ViewContainerRef) {
  }
  ngAfterViewInit() {
    this.vref.createEmbeddedView(this.templateRef);
  }*/
  constructor() {
  }
  ngOnInit() {
    this.dataSync.subscribe(res =>{
      this.toggle();
    });
  }

  toggle(){console.log('data');
    this.toggler = !this.toggler;
  }
  /*
  _onItemClick(data:any, switch_on:string){
    //this.toggle();
    console.log(data,switch_on);
    //data.$event.preventDefault();
    //this.onItemClick.emit({data,switch_on});
  }*/
}