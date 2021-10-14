import { Component, OnInit, QueryList, ViewChild, ViewChildren, ɵConsole } from '@angular/core';
import { Observer, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AyatSearchModel } from './ayat-search.model';
import { AyatService, GoogleService, StorageService } from './../.././../services';
import { PopoverDirective } from 'ngx-bootstrap/popover';

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
  ayatSearchModel = new AyatSearchModel();

  sura: any;
  suras: any[] = [];
  lang: any;
  langs: any[] = [];
  ayatList: any[] = [];
  translate: any;
  translates: any[] = [];

  isSuraSearch = false;
  isSearchLoading = false;
  currentPage = 2
  constructor(
    private ayatService: AyatService,
    private googleService: GoogleService,
    private storageService: StorageService
  ) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.isMobile = window.innerWidth < 760;
  }
  ngOnInit() {
    let langs = this.ayatSearchModel.getLangList();
    let suras = this.ayatSearchModel.getSuraList();
    let translates = this.ayatSearchModel.getTranslateList();
    this.ayatIndexSearched = this.storageService.ayatIndexSearched;

    this.suras = suras;
    this.sura = suras[1];

    this.langs = langs;
    this.lang = langs[5];

    this.translates = translates;
    this.translate = translates[10];
    
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
    
    setTimeout((i:any)=>{
      this.setAyatIndex({},()=>{
        this.ayatIndexs.sort((a, b) => a.name.localeCompare(b.name));
        this.scrollAyatIndexs = this.ayatIndexs.slice(0, this.takeItem);
      });
    },1000)
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
  onSelect($event: any, switch_on:string): void {
    switch (switch_on) {
      case '':
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
  ayatGroup: any = {};
  ayatGroups: any[] = [];
  ayat_Group_key = "ayat_group_key";
  onSubmit(data:any, switch_on:string): void {
    switch (switch_on) {
      case 'add-group':
        let group = this.stringReplace(data['name']);
        if(!this.ayatGroup.hasOwnProperty(group)){
          data['id'] = group;
          this.ayatGroup[group] = {};
          this.ayatGroups.push(data);
          //this.storageService.Set(this.ayat_Group_key, this.ayatGroup);
          //this.storageService.Set(this.ayat_Group_key, this.ayatGroup);
        }
        break;
      case 'group-item':
        break;
      case 'group-item-remove':
        break;
      default:
        break;
      }  
  }  
  //@ViewChild(PopoverDirective) pop?: PopoverDirective;
  @ViewChildren(PopoverDirective) popovers: QueryList<PopoverDirective>;
  onShow(): void {
    //console.log();
    //this.selected = $event;
    //console.log($event.item);
  }
  ayatIndexs: any[] = [];
  ayatIndexSearched: any[] = [];
  onClick(data:any, switch_on:string): void {
    //console.log(data,switch_on);
    //console.log(this.selected);
    switch (switch_on) {
      case 'search': //আল্লাহ মধু মধুর
        if (this.selected.value==this.search) {
          let req:any = {lang: this.translate.id};
          if(this.isSuraSearch){
            req.sura = this.selected.item.id
          }else{
            req.search = this.selected.item.suggestion
          }
          //console.log(req);
          //let req = { sura:this.selected.suggestion }
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
          //console.log('lang:',it.id);
          let res = this.googleService.inputTools('a', it.id).then(
            data => {
              //console.log(query,this.lang.id,data.length);
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
        case 'suggest-item'://suggest Search
        //console.log(data)
        data.$event.preventDefault();
        this.search = data.item.name;
        //data.popover.hide();
        //this.pop.show();
        //console.log(this.pop)
        //console.log(this.popovers.length)
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
        let it = this.ayatIndexSearched.find(it => it.id == data.item.id);
        if(!it){
          this.ayatIndexSearched.push(data.item);
          this.storageService.ayatIndexSearched = this.ayatIndexSearched;
        }
        break;
        case 'suggest-item-sura'://suggest Search
        //console.log(data)
        data.$event.preventDefault();
        this.search = data.item.name;
        //data.popover.hide();
        //this.pop.show();
        //console.log(this.pop)
        //console.log(this.popovers.length)
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
          this.isSuraSearch = true;
          this.onClick(data.$event,'search');
          this.isSuraSearch = false;
        },500);
        break;
      case 'suggest-item-remove':
        //data as index;
        console.log(data, 1);
        this.storageService.ayatIndexSearched = this.ayatIndexSearched.splice(data, 1);
        break;
        case 'ayat-group':  
          //this.ayatGroup[data.group] = star
          data.$event.preventDefault();
          //delete person.age;
          let star_id = data.item.index;
          let star_key = "star-item";
          //this.storageService.Remove("star-item");
          let star_val = this.storageService.Get(star_key);
          if(star_val){
            if(!star_val.hasOwnProperty(star_id)){
              star_val[star_id] = data.item;
              this.storageService.Set(star_key, star_val);
            }
          }else{
            star_val = {};
            star_val[star_id] = data.item;
            this.storageService.Set(star_key, star_val);
          }
          
          //console.log('g1',Object.keys(star_val));
          //for (const key in star_val){
            //console.log(key,star_val[key]);
          //}
          /*star_val.map(key => { 
            console.log(key,star_val[key]);
          });*/
         //let g1 = this.storageService.Get("star-item");
         //console.log('g1',star_val);
         //let g2 = this.storageService.Get("star-item");
         //console.log('g1',g2);
         //console.log('g1',g2);
          //this.search = data.item.name;
        break;
        default:
          console.log(data);
        break;
    }
  }
  hasProperty(it:any, key:string): Boolean{
    return it.hasOwnProperty(key);
  }
  onRemoteClick(data:any, switch_on:string): void {
    console.log(data,switch_on);
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