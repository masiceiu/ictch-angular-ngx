import { Component, ComponentFactoryResolver, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';

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
  constructor(private service: AyatService, private componentFactoryResolver: ComponentFactoryResolver, private renderer2: Renderer2) { 
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
    
    this.renderer2.addClass(componentRef.location.nativeElement, "col-sm-6");
    //this.renderer2.addClass(componentRef.location.nativeElement, "card");
    //this.renderer2.addClass(componentRef.location.nativeElement, "shadow-sm"); 
    //this.renderer2.addClass(componentRef.location.nativeElement, "w-50");
    //this.renderer2.addClass(componentRef.location.nativeElement, "mb-2");
    /*
    constructor(private resolver: ComponentFactoryResolver, private renderer2: Renderer2) { }
    createComponent(message, some_css_class) {
        this.msg.reset();
        const factory = this.resolver.resolveComponentFactory(MessageComponent);
        const componentRef = this.entry.createComponent(factory);
        componentRef.instance.message = message;
        this.renderer2.addClass(componentRef.location.nativeElement, some_css_class);
    }
    */
  }
  add(): void {
    this.addDyn({});
  }
  addNewDisabled = false;
  addNew(ev): void {
    //console.log('ev:',ev);
    //callBack
      this.addNewDisabled = true;
      this.service.get(this._counter++).then(res => {
        //this.ayatList = res;
        res.forEach((item,index)=>{
          this.addDyn(item);
          ev.ref.scrollToBottom();
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