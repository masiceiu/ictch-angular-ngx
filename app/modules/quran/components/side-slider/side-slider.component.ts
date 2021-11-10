import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ElementRef, HostListener  } from '@angular/core';
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
  @Input() dataSync = new Subject<string>();
  //@Output() onItemClick = new EventEmitter<any>();
  /*@ViewChild('templateRef', { read: TemplateRef }) templateRef:TemplateRef<any>;
  constructor(private vref:ViewContainerRef) {
  }
  ngAfterViewInit() {
    this.vref.createEmbeddedView(this.templateRef);
  }*/
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      //this.text = "clicked inside";
    } else {
      if(this.hideToggleIcon){      
        console.log('this.toggler',this.toggler);
        //if(this.toggler){
          //this._onAction('hide');
        //}
      }else if(!this.toggler){
        this._onAction('hide');
      }else{

      }
    }
  }
  skip=false;
  constructor(private eRef: ElementRef) {
    //this.text = 'no clicks yet';
  }
  ngOnInit() {
    this.dataSync.subscribe((res:string) =>this._onAction(res));
  }
  private _onAction(res:string){
    switch(res){
      case"hide":
        this.toggler = true;
      break;
      case"show":
        this.toggler = false;
      break;
      default:
        this.toggle();
      break;
    }
  }
  toggle(){
    this.toggler = !this.toggler;
  }
  /*
  let i = 0;
  (function repeat(){
    if (++i > 5) return;
    setTimeout(function(){
      document.write("Iteration" + i + "<br />");
      repeat();
    }, 5000);
  })();
  */
  /*
  _onItemClick(data:any, switch_on:string){
    //this.toggle();
    console.log(data,switch_on);
    //data.$event.preventDefault();
    //this.onItemClick.emit({data,switch_on});
  }*/
}