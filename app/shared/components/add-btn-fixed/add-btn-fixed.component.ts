import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  }
  //https://stackblitz.com/edit/ngstyle-examples?file=src%2Fapp%2Fapp.component.html
}