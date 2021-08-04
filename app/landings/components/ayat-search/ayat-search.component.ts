import { Component, OnInit, ɵConsole } from '@angular/core';
import { Observer, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AyatSearchModel } from './ayat-search.model';
import { AyatService, GoogleService } from '../../../core/services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ayat-search',
  templateUrl: './ayat-search.component.html',
  styleUrls: ['./ayat-search.component.css']
})
export class AyatSearchComponent implements OnInit {
  search: string;
  suggestions$: Observable<any[]>;
  errorMessage: string;
  search_query: string;

  selected: any = {};
  selectedLanguage = 'bn_bengali';
  ayatSearchModel = new AyatSearchModel();
  constructor(
    private ayatService: AyatService,
    private googleService: GoogleService
  ) {}

  lang: any;
  langs: any[] = [];
  translates: any[] = [];
  ngOnInit() {
    let langs = this.ayatSearchModel.getLangList();
    let translates = this.ayatSearchModel.getLangList();
    
    this.langs = langs;
    this.lang = langs[5];

    this.translates = langs;
    this.translates = langs[9];

    this.suggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search);
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          /*
        return this.googleService.inputTools(query,this.lang.id).then(
        data => {
          //console.log(query,data.length);
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
        });*/
          return of(['a', 'b']);
        }
      })
    );
  }

  onChangeItem($event, switch_on) {
    switch (switch_on) {
      case 'language':
        let id = this.selectedLanguage.split('_')[0];
        let item = this.langs.find(it => it.id == id);
        //console.log('?',item);
        this.lang = item;
        break;
      case 'sura':
        //let req = { sura: this.selectedSura };
        //this.setAyatList(req);
        break;
      case 'ayat':
        //this.item = this.selectedAyat;
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
  onMenuItemClick(data: any) {
    this.lang = data.lang;
    console.log(data.lang);
  }
  onSelect(data: any): void {
    this.selected = data.item;
    console.log(data.item);
  }
  tempCount = 1;
  private ayatList = [];
  onClick(data, switch_on): void {
    switch (switch_on) {
      case 'search': //আল্লাহ মধু মধুর
        //console.log(this.selected.suggestion);
        //let req = { sura: this.tempCount++ };
        //let req = { sura:this.selected.suggestion };
        //let req = { q:this.selected.suggestion };
        let req = {
          lang: this.selectedLanguage,
          search: this.selected.suggestion
        };
        if (req.search) {
          //if(req.q){
          this.setAyatList(req);
        }
        break;
      case 'download':
        break;
    }
  }
  private setAyatList(req, callBack = null): void {
    //console.log(req);
    this.ayatService.getList(req).then(
      res => {
        this.ayatList = res;
        if (callBack) {
          callBack(this);
        }
        //console.log(res);
      },
      ex => {
        console.log(ex.name /*, ex*/);
      }
    );
  }
}
//https://stackoverflow.com/questions/40678206/angular-2-filter-search-list
//https://stackoverflow.com/questions/37969984/angular-2-typescript-how-to-find-element-in-array
