import { Component, OnInit } from '@angular/core';
import { SetupService } from './setup.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  stars:any[] = [];
  constructor(private setupService:SetupService) { }
  ctx = {data: this.stars};
  
  item:any = {};
  ngOnInit() {
    //console.log("init");
    //this.setupService.get("https://lifewhois.com/api/help").subscribe(res =>{
    this.setupService.get("https://lifewhois.com/api/qurn/item").subscribe(res =>{
        console.log(res);
      },err=>{ console.log(err);});
  }
  onClick(switch_on:string, data:any) {
    switch(switch_on){
      case"add-new":
        //console.log(switch_on,data);
        let id = this.stars.length+1;
        this.item.id = id;
        this.item.name = "item-"+id;
        this.stars.push(Object.assign({},this.item));
        console.log(switch_on,this.stars);
      break;
    }
  }

    data= [
      {
        "id": 5,
        "name": "First name",
        "parent": 0
      },
      {
        "id": 1,
        "name": "Second name",
        "parent": 5
      },
      {
        "id": 6,
        "name": "Third name",
        "parent": 1
      },
      {
        "id": 15,
        "name": "Fourth name",
        "parent": 0
      },
      {
        "id": 25,
        "name": "Fifth name",
        "parent": 5
      }
      ];
}
//https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/

import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'tree',
  template: `<div *ngFor="let item of dataList">
  <ol *ngIf="item.parent==parentId">
    <li>{{item.name}}
      <tree [parentId]="item.id" (click)="_click($event,$event)" [dataList]="removeCurrentLevelItems(dataList,parentId)"></tree>
    </li>
    <li style="list-style: none;" ><a (click)="_click('add-new',item);" href="javascript:void(0)"> Add New </a></li>
  </ol>
</div>`
})
export class TreeComponent  {
  @Input() parentId:number;
  @Input() dataList:any [];
  @Output() click = new EventEmitter<any>();

  
  _click(switch_on:string, data:any = null) {
    switch(switch_on){
      case"add-new":
        console.log(switch_on,data);
        this.click.emit(switch_on,data);
      break;
    }
  }
  removeCurrentLevelItems=(datalist,parentId)=>{
    //logic here to remove current level items
    return datalist.filter(item=>item.parentId!=parentId)
    // return datalist;
  }
}