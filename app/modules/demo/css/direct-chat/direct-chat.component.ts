import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-chat',
  templateUrl: './direct-chat.component.html',
  styleUrls: ['./direct-chat.component.css']
})
export class DirectChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  classToggled = false;
  public toggler() {
    this.classToggled = !this.classToggled;  
  }
}