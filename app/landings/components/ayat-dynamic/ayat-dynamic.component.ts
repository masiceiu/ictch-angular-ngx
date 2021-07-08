import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import {AyatService} from './../../../core/services';
import { AyatCardComponent } from './../../../shared/components/ayat-card/ayat-card.component';

@Component({
  selector: 'app-ayat-dynamic',
  templateUrl: './ayat-dynamic.component.html',
  styleUrls: ['./ayat-dynamic.component.css']
})
export class AyatDynamicComponent implements OnInit {
  
  public title = 'Quran Ayat';
  public ayatList: any[] = [];
  constructor(private service: AyatService, private componentFactoryResolver: ComponentFactoryResolver) { 
    this.loadList();
  }
  ngOnInit(): void {
  }

  private loadList(): void{
    this.service.getList().then(res => {
        this.ayatList = res;
    },ex=>{console.log(ex.name/*, ex*/);});
  }

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  private _counter = 1;
  addDyn(data:any): void {
    // create the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AyatCardComponent);
    // add the component to the view
    const componentRef = this.container.createComponent(componentFactory);
    // pass some data to the component
    (<AyatCardComponent>componentRef.instance).data = data;
  }
  add(): void {
    this.addDyn({});
  }
  addNewDisabled = false;
  addNew(): void {
      this.addNewDisabled = true;
      this.service.get(this._counter++).then(res => {
        //this.ayatList = res;
        res.forEach((item,index)=>{
          this.addDyn(item);
          //console.log(item,index);
       });      
       this.addNewDisabled = false;
    },ex=>{console.log(ex.name/*, ex*/);});
  }
  items: any[] = [];
  fetchTodos() {
    const ids = [1, 2, 3, 4];
    ids.map(async id => {
      let request = await this.service
        .get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        
      let response = await request;

      this.items.push(response);
    });

    
  }

}