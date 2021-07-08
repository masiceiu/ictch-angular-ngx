import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-btn-fixed',
  templateUrl: './add-btn-fixed.component.html',
  styleUrls: ['./add-btn-fixed.component.css']
})
export class AddBtnFixedComponent implements OnInit {

  @Input() text = '+';
  @Input() size = 50;
  @Input() opacity = .5;
  @Input() isCircle = true;
  @Input() positionBottom = 10;
  @Output() onAddClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  addClick(data:any) 
  {
    this.onAddClick.emit(data||{});
    this.scrollTo();
  }
  //https://stackblitz.com/edit/ngstyle-examples?file=src%2Fapp%2Fapp.component.html
/***************************************/
  @HostListener("window:scroll") onWindowScroll() {
    /*let scroll = window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop || 0;

    const max = document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

    if (scroll === max) {
      alert('Bottom');
    }*/
  }
  scrollTo(input:any) 
  { 
    switch(input){
      case"top":
        (function smoothscroll(){ 
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
          if (currentScroll > 0) 
          {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 5));
          }
        })();
        break;
        case"bottom":
        (function smoothscroll(){ 
          window.scrollTo(0,document.body.scrollHeight);
        })();        
        break;
    } 
  }
}