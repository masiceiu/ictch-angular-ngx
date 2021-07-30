import { Component, OnInit, ɵConsole } from '@angular/core';
import { Observer, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AyatService, GoogleService } from '../../../core/services';

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

  selected:any = {};
  constructor( 
    private ayatService: AyatService,
    private googleService: GoogleService) { 

  }

  lang: any;
  langs: any[] = [];
  ngOnInit(){
     let langs = [
      { id : 'en', name : 'English', imageUrl : 'https://www.countryflags.io/be/flat/64.png'},
      { id : 'fr', name : 'French', imageUrl : 'https://www.countryflags.io/fr/flat/64.png'},
      { id : 'pl', name : 'Polish', imageUrl : 'https://www.countryflags.io/pl/flat/64.png'},
      { id : 'bn', name : 'Bangla', imageUrl : 'https://www.countryflags.io/bd/flat/64.png'},
      { id : 'ar', name : 'Arabic', imageUrl : 'https://www.countryflags.io/sa/flat/64.png'},
      ];
      this.langs = langs;
      this.lang = langs[3];

      this.suggestions$ = new Observable((observer: Observer<string>) => {
        observer.next(this.search);
      }).pipe(switchMap((query: string) => {
          if (query) {
            return this.googleService.inputTools(query,this.lang.id).then(
              data => {
                if(data.length > 0 && data[1].length > 0 && data[1][0].length > 0 && data[1][0][1].length > 0){
                  let res = (data[1][0][1]);
                  res[5] = query;
                 let results = Object.keys(res).map(key => ({ 
                    'index' : key, 
                    'suggestion' : res[key] 
                    }));
                  return results;
                }
            });
           /*return of(['a','b']);*/
          }
        }));
  }
  onOpenChange(data: boolean): void {
    console.log(data);
  }
  onMenuItemClick(data: any)
  {
    this.lang = data.lang
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
      case 'search':
        //console.log(this.selected.suggestion);
        //let req = { sura: this.tempCount++ };
        let req = { sura:this.selected.suggestion };
        if(req.sura){
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
