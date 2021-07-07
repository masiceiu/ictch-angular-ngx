import { Component, OnInit } from '@angular/core';

import {AyatService} from './../../../core/services';

@Component({
  selector: 'app-ayat-dynamic',
  templateUrl: './ayat-dynamic.component.html',
  styleUrls: ['./ayat-dynamic.component.css']
})
export class AyatDynamicComponent implements OnInit {

  public ayatList: any[] = [];
  constructor(private service: AyatService) { 
    this.loadList();
  }
  ngOnInit(): void {
  }

  private loadList(): void{
    this.service.getList().then(res => {
      console.log(res.data);
      if (res.data){
        console.log(res.data);
        this.ayatList = res.data;
      }
      else {
        console.log('Error', res);
      }
    });
  }
}