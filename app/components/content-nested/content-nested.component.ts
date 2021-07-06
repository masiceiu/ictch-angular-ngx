import { Component, OnInit, ContentChildren, ViewChildren, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-content-nested',
  templateUrl: './content-nested.component.html',
  styleUrls: ['./content-nested.component.css']
})
export class ContentNestedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
//--
@Component({
  selector: 'test-3',
  template: `third Level`
})
export class Test3Component  { }

//--
@Component({
  selector: 'test-2',
  template: `Second Level <test-3></test-3>`
})
export class Test2Component  { }

//--
@Component({
  selector: 'test-1',
  template:`First level`   
})
export class Test1Component implements AfterViewInit  {
    
  @ContentChildren(Test2Component, { descendants: true })
  public content;

   ngAfterViewInit(){
    console.log(this.content.toArray())
    this.content.changes.subscribe(c => console.log(this.content.toArray(), 'test'));
    
  }
}