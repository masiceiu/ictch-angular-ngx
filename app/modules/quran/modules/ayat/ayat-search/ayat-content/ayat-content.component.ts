import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ayat-content',
  templateUrl: './ayat-content.component.html',
  styleUrls: ['./ayat-content.component.css']
})
export class AyatContentComponent implements OnInit {
  
  //@Input() it:any = {};
  @Input() data:any = {};
  @Input() config:any = {};
  @Input() isSuraSearch = false;
  //@Input() suraIndex:any = {1:{name:"aa"}};
  //@Input() star_ayats:any[] = [];
  @Input() refMore: TemplateRef<any>;
  @Output() onItemClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    
  }
  _onItemClick(data:any, switch_on:string){
    //console.log(data,switch_on);
    data.$event.preventDefault();
    this.onItemClick.emit({data,switch_on});
    //this.onItemClick.emit(data,switch_on);
  }
}