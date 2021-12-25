import { Component, OnInit, QueryList, ViewChild, ViewChildren, ɵConsole } from '@angular/core';
import {Subject, Observer, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PopoverDirective } from 'ngx-bootstrap/popover';

import { AyatModel } from './../ayat.model';
import { 
  AyatService, 
  GoogleService, 
  StorageService,
  AudioService 
} from './../.././../services';
import { ScrollableItemDirective } 
from '../../../shared/directives/scrollable-item.directive';

@Component({
  selector: 'app-ayat-search',
  templateUrl: './ayat-search.component.html',
  styleUrls: ['./ayat-search.component.css'],
  host: {"(window:resize)":"onWindowResize($event)" }
})
export class AyatSearchComponent implements OnInit {
  
  width = 250;
  height = 250;
  fixedHeight = 253;
  isMobile: boolean = false;
  dataSync = new Subject<string>();
  config = {
    aFontSize:30,//
    mFontSize:16,//
    eFontSize:17,//
    aShow:true,//
    mShow:true,//
    eShow:true,//
  };
  rangeMin = 0
  rangeMax = 30
  rangeDefault = 15
  rangeFontSize = 15

  search: string="";
  selected: any = {};
  suggestions$!: any;// Observable<string[]>;

  selectedLanguage = {};//'bn_bengali'
  ayatModel = new AyatModel();
  
  sura: any;
  suras: any[] = [];
  suraIndex: any = {};

  lang: any;
  langs: any[] = [];
  
  ayatAll: any[] = [];
  ayatList: any[] = [];
  //ayatAllIndex: any = {};

  translate: any;
  translates: any[] = [];
  ayatIndexs: any[] = [];

  spin = false;
  //isSuraSearch = false;
  isSearchLoading = false;
  currentPage = 2;

  groups: any[] = [];

  ayatGroups: any[] = [];
  ayat_groups_key = "ayat_groups_key";
  star_ayats: any = {};
  star_ayats_key = "ayat_star_key";
  /*ayat_stars: any[];
  ayat_stars_key = "ayat_star_key";
  ayatGroup: any = {};
  ayat_group_key = "ayat_group_key";
  ayatGroups: any[];
  ayat_groups_key = "ayat_groups_key";*/
  ayat_searchs: any[] = [];
  ayat_search_key = "ayat_search_key";
  constructor(
    private ayatService: AyatService,
    private googleService: GoogleService,
    private storageService: StorageService,
    private audioService: AudioService
  ) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.isMobile = window.innerWidth < 760;

    this.groups = [
      { id:"a", name:"Group Emoji Frown", icon:"emoji-frown" },
      { id:"b", name:"Group Emoji Smile", icon:"emoji-smile" }
    ];
    this.ayatGroups = [
      { id:"a", name:"Group Emoji Frown", icon:"emoji-frown", ayats:{} },
      { id:"b", name:"Group Emoji Smile", icon:"emoji-smile", ayats:{} }
    ];
  }
  ngOnInit() {
    this.audioService.play();
    let translates = this.ayatModel.getTranslateList();
    this.translates = translates;
    this.translate = translates[10];

    let langs = this.ayatModel.getLangList();
    this.langs = langs;
    this.lang = langs[5];

    let suras = this.ayatModel.getSuraList(this.lang.id);
    this.suras = suras;
    this.sura = suras[1];
    suras.forEach((it:any) => {
      this.suraIndex[it.id] = it;
    });

    //this.ayatGroup = this.storageService.Get(this.ayat_group_key)||this.ayatGroup;
    //this.ayatGroups = this.storageService.GetList(this.ayat_groups_key)||this.ayatGroups;
    this.star_ayats = this.storageService.GetList(this.star_ayats_key)||this.star_ayats;
    this.ayat_searchs = this.storageService.GetList(this.ayat_search_key)||this.ayat_searchs;
    
    setTimeout(()=>{
      let group = this.storageService.Get("ayat_group")||{};
      for (const key in group){
            //console.log(key,star_val[key]);
            //this.ayatGroup
      }
    },1000)

    this.suggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search);
    }).pipe(
      switchMap((query: string) => {
        if (query){ 
          if (this.lang.suggestion){
          return this.googleService.inputTools(query,this.lang.id).then(
            data => {
            //console.log(query,this.lang.id,data.length);
            if(data.length > 1){
              if(data.length > 0 && data[1].length > 0 && data[1][0].length > 0 && data[1][0][1].length > 0){
                let res = (data[1][0][1]);
                res[5] = query;
                let results = Object.keys(res).map(key => ({ 
                  'index' : key, 
                  'suggestion' : res[key] 
                  }));
                return results;
              }else return of([{}]);
            }else {
              console.log('lang:',this.lang.id);
              return [{ 'index' : 0, 'suggestion' : query }];
            }
          });
          }else{
            //return of(['a', 'b']);
            //return [{ 'index' : 0, 'suggestion' : query }];
            return of([{ 'index' : 0, 'suggestion' : query }]);         
          }
        }else return of([]);

      })
    );
    //setTimeout(()=>{
     //this.spin = false;
     let fn = function(s,t,self){
      let limit = ""+s+","+t+"";
      //console.log("limit:",limit);
      self.setAyatAll({limit:limit}).then((res:any)=>{
        //console.log("res:",res);
        let next = res>0;
        //self.spin = res>0;
        //if(self.spin){
        if(next){
          fn((s+t),t,self);
        }else{
          //console.log("res:",self.ayatAll.length);
          //console.log("res:",self.ayatAllIndex[200]);
        }
      });
    }
    //fn(0,2000,this);
    fn(0,7000,this);
    //},1000)
    setTimeout((i:any)=>{
      this.setAyatIndex({},()=>{
        this.ayatIndexs.sort((a, b) => a.name.localeCompare(b.name));
        this.scrollAyatIndexs = this.ayatIndexs.slice(0, this.takeItem);
        //console.log('this.scrollAyatIndexs:',this.scrollAyatIndexs);
      });
    },1000)
    
    this.init();
  }
  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < 760;
  }
  onChange(data:any, switch_on:string) {
    switch (switch_on) {
      case 'translate':
        this.translate = data;
        let id = data.id.split('_')[0];
        let item = this.langs.find(it => it.id == id);
         console.log('?',item);
        this.lang = item;
        break;
      case 'lang':
        //let id = this.selectedLanguage.split('_')[0];
        //let item = this.langs.find(it => it.id == id);
        //console.log('?',item);
        this.lang = item;
        break;
      case 'sura':
        this.search = '';
        //console.log('?',data);
        break;
        case 'ayat':
          break;
      case 'range':
        let pad = this.rangeFontSize - this.rangeDefault;
        this.config.aFontSize = 30 + pad;
        this.config.mFontSize = 16 + pad;
        this.config.eFontSize = 17 + pad;
        //console.log('range-1:'+ data,'range-2:'+ this.rangeFontSize);
        break;
    }
    /*
    console.log($event,switch_on);
    console.log(this.selectedLanguage);
     console.log(this.selectedSura);
    console.log(this.selectedAyat);
    //console.log(this.selectedItem);
    */
  }
  onOpenChange(data: boolean): void {
    console.log(data);
  }
  @ViewChildren(ScrollableItemDirective) scrollableItems!: QueryList<ScrollableItemDirective>
  public handleScrollClick($event:any, key: any) {
    $event.preventDefault();
    this.popovers.forEach((popover: PopoverDirective) => {
      if(popover.isOpen){
        popover.hide();
      }
    });
    const item = this.scrollableItems.find(x => x.key.startsWith(key));
    if(item){
      item.scrollIntoView();
    }
    //console.log(this.popovers.length);
    //console.log($event, key,this.scrollableItems,item);
  }
  onSelect($event: any, switch_on:string = ""): void {
    switch (switch_on) {
      case '':
        $event.preventDefault();
        break;
      default:
        console.log($event);
        this.selected = $event;
        //console.log($event.item);
        break;
    }
  }
  stringReplace(str:string,by:string='') {
    //wordExp = /(([a-zA-Z\s])?\w+)/;
    return str.replace(/[.*+?^${}()/|\\[\]\s]/g,by);
    //ref:https://stackblitz.com/edit/find-and-replace?file=src%2Fapp%2Fapp.component.ts
  }
  onSubmit(data:any, switch_on:string): void {
    switch (switch_on) {
      case 'add-group'://.toLowerCase()
        //console.log(this.storageService.Keys);
        /*let group = this.stringReplace(data['name']);
        let it = this.ayatGroups.find(it => it.id == group);
        if(!it){
          data['id'] = group;
          this.ayatGroups.push(data);
          //this.storageService.Set(this.ayat_groups_key, this.ayatGroups);
        }*/

        /*if(!this.ayatGroup.hasOwnProperty(group)){
          data['id'] = group;
          this.ayatGroup[group] = {};
          this.ayatGroups.push(data);
          //this.storageService.Set(this.ayat_group_key, this.ayatGroup);
          //this.storageService.Set(this.ayat_groups_key, this.ayatGroups);
        }
        console.log(this.ayatGroup,this.ayatGroups);
        this.storageService.Remove(this.ayat_group_key);
        this.storageService.Remove(this.ayat_groups_key);
        //this.storageService.Remove(this.ayat_search_key);
        */
        break;
      case 'group-item':
        break;
      case 'group-item-remove':
        break;
      default:
        break;
      }  
  }  
  @ViewChildren(PopoverDirective) popovers: QueryList<PopoverDirective> = new QueryList<PopoverDirective>();
  onShow(): void {
    //console.log();
    //this.selected = $event;
    //console.log($event.item);
  }
  idata:any
  onClick(data:any, switch_on:string): void {
    //console.log(data,switch_on);
    //console.log(this.selected);
    switch (switch_on) {
      case 'search': //আল্লাহ মধু মধুর
        //console.log(this.selected.value,this.search);
        if (this.selected.value==this.search) {
          let req:any = {lang: this.translate.id};
          if(this.selected.item.id){
            req.sura = this.selected.item.id
          }else{
            req.search = this.selected.item.suggestion
          }
          this.setAyatList(req);
        }
        break;
      case 'lang-item':
        this.lang = data;
        //console.log(data);
        break;
      case 'translate-item':
        this.translate = data;
        let id = data.id.split('_')[0];
        let item = this.langs.find(it => it.id == id);
        this.lang = item;
        //console.log(item);
        //console.log(data);
        break;
      case 'download':
        break;
      case 'test':
        this.langs.forEach((it, i) => {
          let res = this.googleService.inputTools('a', it.id).then(
            data => {
              if (data.length > 1) {

              } else {
                //this.list.push(it.id);
                //console.log('lang:',this.lang.id);
                //return [{ 'index' : 0, 'suggestion' : query }];
              }
            });
        });
        break;
      case 'sura-view'://isSuraSearch
        if(this.search){
          this.search = '';
        }
        break;
        case 'suggest-item':
        data.$event.preventDefault();
        this.search = data.item.name;
        this.popovers.forEach((popover: PopoverDirective) => {
          if(popover.isOpen){
            popover.hide();
          }
        });
        this.selected = {
        header: false,
        value: data.item.name,
        item: {
            index: "0",
            suggestion: data.item.name
          }
        }
        setTimeout(() => { 
          this.onClick(data.$event,'search');
        },500);

        let ayat_search = this.ayat_searchs.find(it => it.id == data.item.id);
        if(!ayat_search){
          this.ayat_searchs.push(data.item);
          this.storageService.SetList(this.ayat_search_key,this.ayat_searchs);
        }
        break;
        case 'suggest-item-sura':
        data.$event.preventDefault();
        this.search = data.item.name;
        this.popovers.forEach((popover: PopoverDirective) => {
          if(popover.isOpen){
            popover.hide();
          }
        });
        this.selected = {
        header: false,
        value: data.item.name,
        item: data.item
        }
        setTimeout(() => { 
          //this.isSuraSearch = true;
          this.onClick(data.$event,'search');
          //this.isSuraSearch = false;
        },500);
        //this.dataSync.next('hide');
        break;
      case 'suggest-item-remove':
        //data as index;
        //console.log(data, 1);
        this.storageService.SetList(this.ayat_search_key,this.ayat_searchs.splice(data, 1));
        break;
        case 'ayat-group':
          //console.log(data.$event, data.item,this.star_ayats);          
          //delete person.age;
          /**/
          data.$event.preventDefault();
          let index = data.item.index;
          let has_star_ayat = this.star_ayats.hasOwnProperty(index);
          if(!has_star_ayat){
            this.star_ayats[index] = data.item;
            this.storageService.SetList(this.star_ayats_key,this.star_ayats);
          }

           /*
          let group = data.group;
           if(group.toLowerCase() === "star".toLowerCase()){
            group = "MyLife";
          }
          let index = data.item.index;
         if(!this.ayatGroup[group].hasOwnProperty(index)){
            this.ayatGroup[group][index] = data.item;
            this.storageService.Set(this.ayat_group_key, this.ayatGroup[group]);
          }else{
            this.ayatGroup[group][index] = data.item;
            this.storageService.Set(this.ayat_group_key, this.ayatGroup[group]);
          }
          console.log(group,this.ayatGroup);
          console.log('g1',Object.keys(star_val));
          */
          //for (const key in star_val){
            //console.log(key,star_val[key]);
          //}
          /*star_val.map(key => { 
            console.log(key,star_val[key]);
          });*/
        break;
        case 'ayat-left':
          data.$event.preventDefault();
          this.idata = data.item.index;
          this.dataSync.next("");
          //console.log(data);
          break;          
        case 'ayat-right':
          data.$event.preventDefault();
          this.idata = data.item.index-2;
          this.dataSync.next("");
          //console.log(data);
          break;
        default:
          console.log(data);
        break;
    }
  }
  map(it:any): any[]{
    return Object.keys(it).map(index => {
      return it[index];
    });
  }
  hasProperty(it:any, key:string): Boolean{ 
    console.log(it,key);
    return it.hasOwnProperty(key);
  }
  onRemoteClick(data:any, switch_on:string): void {
    console.log(data,switch_on);
  }
  //ref: https://stackoverflow.com/questions/34094806/return-from-a-promise-then
  private setAyatAll(req:any): Promise<any> {
    //console.log(req);
    let lang = this.translate.id;
    return this.ayatService.getAll(lang,req).then(
      res => { 
        /*res.forEach((it, i) => {
          this.ayatAll.push(it);
          this.ayatAllIndex[it.index] = it;
        });*/
        if(res.length>0){
          this.ayatAll = res;
        }
        return new Promise(function(resolve, reject) { 
          return resolve(res.length);
        });
      },
      ex => {
        console.log(ex.name /*, ex*/);
        return new Promise(function(resolve, reject) { 
          return resolve(0);
        });
      }
    );
  }

  private setAyatList(req:any, callBack:any=null): void {
    //console.log(req);
    this.ayatList = [];
    this.isSearchLoading = true;
    this.ayatService.getList(req).then(
      res => {
        this.ayatList = res;
        if (callBack) {
          callBack(this);
        }
        this.isSearchLoading = false;
        //console.log(res);
      },
      ex => {
        this.isSearchLoading = false;
        console.log(ex.name /*, ex*/);
      }
    );
  }
  
  private setAyatIndex(req:any, callBack:any=null): void {
    let lang = this.translate.id;
    this.ayatIndexs = [];
    //this.isSearchLoading = true;
    this.ayatService.getIndexs(lang).then(
      res => {
        this.ayatIndexs = res;
        if (callBack) {
          callBack(this);
        }
        //this.isSearchLoading = false;
        //console.log(res);
      },
      ex => {
        //this.isSearchLoading = false;
        console.log(ex.name /*, ex*/);
      }
    );
  }
  /*********************************/
  count = 0;
  marquee:any={};
  marquees=[];
  marqueeId=0;
  private checkMarquees() {
    let i = this.count%2;
    if(i){
      //this.marquees[i].index = this.count;
    }
    this.count++;
    console.log ('Count is ' + this.count,i);
  }
  init(){
    this.marquee = this.ayatModel.getMarqueeModel();
    this.marqueeId = this.start(()=>{
      this.marquee.recents[0] = this.marquee.marquees[0];
    });
  }
  start(callBack=()=>null,interval:number=1000):number {
    if(callBack){
      callBack();
      return setInterval(() => {
        callBack(); 
      }, interval);
    }
  }
  stop(id:number):void {
    if (id) {
      clearInterval(id);
    }
  }
  /********************************/
  scrollPage = 1;
  takeItem = 10;
  scrollAyatIndexs: any[] = [];
  onScrollDown() {
    setTimeout(() => {
    const skipItem = this.scrollPage * this.takeItem;
    const takeItem = (this.scrollPage+1) * this.takeItem;
    let resItems = this.ayatIndexs.slice(skipItem, takeItem);
    resItems.forEach((it:any) => {
      this.scrollAyatIndexs.push(it);
    });
    //console.log('scrolled!!',skipItem,takeItem,this.scrollPage,this.scrollAyatIndexs, this.ayatIndexs.length);
    //this.scrollAyatIndexs = this.ayatIndexs.slice(skipItem, takeItem+1);
    //console.log('scrolled!!',this.scrollAyatIndexs);
    this.scrollPage++;
    },100);
  }
  //this.contentArray = this.contentArray.map((v: string, i: number) => `Content line ${i + 1}`);
  //this.returnedArray = this.contentArray.slice(0, 10);
}
//https://www.concretepage.com/angular-2/angular-2-formgroup-example
//https://stackoverflow.com/questions/40678206/angular-2-filter-search-list
//https://stackoverflow.com/questions/37969984/angular-2-typescript-how-to-find-element-in-array
//https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form

//https://stackblitz.com/edit/angular-parent-child-subject
//https://stackoverflow.com/questions/38974896/call-child-component-method-from-parent-class-angular
//