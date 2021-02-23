import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-test',
  templateUrl: './blog-test.component.html',
  styleUrls: ['./blog-test.component.css']
})
export class BlogTestComponent implements OnInit {

  private isSearchActive = true;
  constructor() { }
  log: any = {};
  langs: any[] = [];
  ngOnInit(){
    this.langs = [
      { id : 'en', name : 'English', ImageUrl : 'https://www.countryflags.io/be/flat/64.png'},
      { id : 'fr', name : 'French', ImageUrl : 'https://www.countryflags.io/fr/flat/64.png'},
      { id : 'pl', name : 'Polish', ImageUrl : 'https://www.countryflags.io/pl/flat/64.png'},
      { id : 'bn', name : 'Bangla', ImageUrl : 'https://www.countryflags.io/bd/flat/64.png'},
      { id : 'ar', name : 'Arabic', ImageUrl : 'https://www.countryflags.io/sa/flat/64.png'},
      ];
  }
  searchActiveChange(): void {
    this.isSearchActive = !this.isSearchActive;
  }
  onMenuItemClick(data: any)
  {
    //data.dropdown.autoClose = false;
    //this.log.menuItem = data;
    //console.log(data);
    //console.log(data);
    //console.log(data.dropdown.autoClose);
  }
  onOpenChange(data: boolean): void {
    //this.log.menuOpen = data;
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