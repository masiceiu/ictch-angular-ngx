import { Component, OnInit } from '@angular/core';
import { SetupService } from './setup.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
})
export class SetupComponent implements OnInit {
  item: any = {};
  items: any[] = [
    {
      slides: [1],
      groups: [2],
    },
  ];

  stars: any[] = [];
  star_indexs: any[] = [];
  constructor(private setupService: SetupService) {}
  ctx = { data: this.stars };

  ngOnInit() {
    //console.log("init");
    //this.setupService.get("https://lifewhois.com/api/help").subscribe(res =>{})
    this.loadItems();
  }
  onClick(switch_on: string, data: any) {
    switch (switch_on) {
      case 'add-new':
        if (confirm('confirm before add!')) {
          this.postItem();
        }
        break;
      case '': //slide
        //console.log(switch_on,data);
        let id = this.stars.length + 1;
        this.item.id = id;
        this.item.name = 'item-' + id;
        this.star_indexs.push(id);
        this.stars.push(Object.assign({}, this.item));
        console.log(switch_on, this.stars, this.star_indexs);
        break;
    }
  }
  loadItems() {
    this.setupService.get('https://lifewhois.com/api/qurn/item').subscribe(
      (res) => {
        console.log(res);
        //this.items = res;
      },
      (err) => {
        console.log(err);
      }
    );
    /*let filteredArray = this.employeeList.filter(function(employee){
        console.log(employee.experiance>1)
        return employee.experiance>1;
      })*/
    /*let amrishIndex = this.employeeList.findIndex(function (empl) {
      return  empl.name === 'gowri';
    });*/
  }

  postItem() {
    let data = {
      json: this.items[0],
      lang: 'bn',
      type_id: 1,
      parent_id: null,
    };
    /*
    this.setupService.post("https://lifewhois.com/api/qurn/item", data).subscribe(res =>{
        console.log(res);
        //this.items = res;
      },err=>{ console.log(err);});*/
    //console.log(("" is Object))
    //console.log(Array.isArray(data));
    let isObject = function (item) {
      return typeof item === 'object' && !Array.isArray(item) && item !== null;
    };
    let fn = function (item) {
      Object.keys(item).map((key) => {
        let val = item[key];
        if (Array.isArray(val)) {
          console.log('array:', val);
          val.forEach((item) => {
            fn(item);
          });
        } else if (typeof val === 'object' && val !== null) {
          console.log('object:', val);
          fn(val);
        } else {
          console.log('val:', val);
        }
        //console.log(key,":",val);
      });
    };
    fn(data);
    //if(Array.isArray(data)){
    //data.forEach(item =>{
    //fn(item);
    //});
    //}else if(isObject(data)){
    //fn(data);
    //}else{
    //console.log(":",data);
    //console.log("key=>val");
    //fn(data);
    /*Object.keys(data).map((v) =>{
        console.log("v:",v);
      });
      Object.keys(data).forEach(key =>{
        console.log("key:",key);
      });*/
    //}

    let map = new Map<string, string>();
    //Object.keys(this.res['values']).forEach(key => this.map.set(key, this.res['values'][key]))
    //console.log(this.map)
  }

  /*
    addItem(){post
      const body = { title: 'Angular POST Request Example' };
      this.http.post<any>('https://reqres.in/api/posts', body, { headers }).subscribe(data => {
          this.postId = data.id;
      });
      this.setupService.get("https://lifewhois.com/api/qurn/item").subscribe(res =>{
          console.log(res);
          this.items = res;
        },err=>{ console.log(err);});
    }
    delItem(){
      this.setupService.get("https://lifewhois.com/api/qurn/item").subscribe(res =>{
          console.log(res);
          this.items = res;
        },err=>{ console.log(err);});
    }
  */
  data = [
    {
      id: 5,
      name: 'First name',
      parent: 0,
    },
    {
      id: 1,
      name: 'Second name',
      parent: 5,
    },
    {
      id: 6,
      name: 'Third name',
      parent: 1,
    },
    {
      id: 15,
      name: 'Fourth name',
      parent: 0,
    },
    {
      id: 25,
      name: 'Fifth name',
      parent: 5,
    },
  ];
  rnd() {
    this.state = {
      person: {
        name: 'lullubi',
        address: { city: 'kullulu', phone: '9778797987' },
      },
    };
    //Object.keys(this.state.person).map((v) => (
    //<div>{[v,": ",JSON.stringify(this.state.person[v]),<br />]}</div>
    //))
  }
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
</div>`,
})
export class TreeComponent {
  @Input() parentId: number;
  @Input() dataList: any[];
  @Output() click = new EventEmitter<any>();

  _click(switch_on: string, data: any = null) {
    switch (switch_on) {
      case 'add-new':
        console.log(switch_on, data);
        this.click.emit(switch_on, data);
        break;
    }
  }
  removeCurrentLevelItems = (datalist, parentId) => {
    //logic here to remove current level items
    return datalist.filter((item) => item.parentId != parentId);
    // return datalist;
  };
}
