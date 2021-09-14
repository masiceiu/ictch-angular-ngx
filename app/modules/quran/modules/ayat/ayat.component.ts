import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayat',
  templateUrl: './ayat.component.html',
  styleUrls: ['./ayat.component.css']
})
export class AyatComponent implements OnInit {
  show = false;
  constructor() { }

  ngOnInit() {
  }
  onShow($ev){
    console.log($ev);
    this.show = !this.show;
    return false;
  }

}