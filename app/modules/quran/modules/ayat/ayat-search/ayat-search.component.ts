import { Component, OnInit, ɵConsole } from '@angular/core';
import { Observer, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AyatSearchModel } from './ayat-search.model';
import { AyatService, GoogleService } from './../.././../services';

@Component({
  selector: 'app-ayat-search',
  templateUrl: './ayat-search.component.html',
  styleUrls: ['./ayat-search.component.css']
})
export class AyatSearchComponent implements OnInit {
  
  //atextFontSize = 40;
  //ayatListConfig = {};
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

  search: string;
  selected: any = {};
  suggestions$: Observable<any[]>;

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
  constructor(
    private ayatService: AyatService,
    private googleService: GoogleService
  ) {

  }
  ngOnInit() {
    let langs = this.ayatSearchModel.getLangList();
    let suras = this.ayatSearchModel.getSuraList();
    let translates = this.ayatSearchModel.getTranslateList();

    this.suras = suras;
    this.sura = suras[1];

    this.langs = langs;
    this.lang = langs[5];

    this.translates = translates;
    this.translate = translates[10];

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
              }
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
        }else return of([{}]);
      })
    );
  }

  onChange(data, switch_on) {
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
  onSelect($event: any): void {
    //console.log($event);
    this.selected = $event;
    //console.log($event.item);
  }
  list=[];
  onClick(data, switch_on): void {
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
                this.list.push(it.id);
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
    }
  }
  private setAyatList(req, callBack = null): void {
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
}
//https://www.concretepage.com/angular-2/angular-2-formgroup-example
//https://stackoverflow.com/questions/40678206/angular-2-filter-search-list
//https://stackoverflow.com/questions/37969984/angular-2-typescript-how-to-find-element-in-array
//https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form