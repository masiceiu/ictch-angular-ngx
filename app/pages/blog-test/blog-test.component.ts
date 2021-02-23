import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-test',
  templateUrl: './blog-test.component.html',
  styleUrls: ['./blog-test.component.css']
})
export class BlogTestComponent implements OnInit {

  private isSearchActive = true;
  constructor() { }
  langs: any[] = [
    { id:'bn', name:'Bangla' },
    { id:'en', name:'English' },
    { id:'ar', name:'Arabic' }
  ];
  ngOnInit() {
  }
  searchActiveChange(): void {
    this.isSearchActive = !this.isSearchActive;
  }
  onOpenChange(data: boolean): void {
    //this.text = data ? 'opened' : 'closed';
  }
  handler(value: string): void {
    //this.messages.push(`Event ${value} is fired`);
    //this.messages = this.messages.length > 2 ? this.messages.slice(0, 1) : this.messages;
  }
  /*messages: string[] = [];
  message = 'onShown';
 
  handler(value: string): void {
    this.messages.push(`Event ${value} is fired`);
    this.messages = this.messages.length > 2 ? this.messages.slice(0, 1) : this.messages;
  }*/
  isOffcanvas=false;
  onOffcanvasClick = function(){
    this.isOffcanvas = !this.isOffcanvas;
  } 
}