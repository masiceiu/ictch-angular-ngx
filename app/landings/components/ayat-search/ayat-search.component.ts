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
      /*
      { id : 'ar', name : 'Arabic', imageUrl : 'https://www.countryflags.io/sa/flat/64.png'},
      { id : 'en', name : 'English', imageUrl : 'https://www.countryflags.io/be/flat/64.png'},
      { id : 'bn', name : 'Bangla', imageUrl : 'https://www.countryflags.io/bd/flat/64.png'},
      { id : 'fr', name : 'French', imageUrl : 'https://www.countryflags.io/fr/flat/64.png'},*/
      { id : 'am', name : 'Amharic', imageUrl : 'https://www.countryflags.io/am/flat/64.png'},
      { id : 'ar', name : 'Arabic', imageUrl : 'https://www.countryflags.io/ar/flat/64.png'},
      { id : 'az', name : 'Azerbaijani', imageUrl : 'https://www.countryflags.io/az/flat/64.png'},
      { id : 'be', name : 'mazigh', imageUrl : 'https://www.countryflags.io/be/flat/64.png'},
      { id : 'bg', name : 'Bulgarian', imageUrl : 'https://www.countryflags.io/bg/flat/64.png'},
      { id : 'bn', name : 'Bengali', imageUrl : 'https://www.countryflags.io/bd/flat/64.png'},
      { id : 'bs', name : 'Bosnian', imageUrl : 'https://www.countryflags.io/bs/flat/64.png'},
      { id : 'cs', name : 'Czech', imageUrl : 'https://www.countryflags.io/cs/flat/64.png'},
      { id : 'de', name : 'German', imageUrl : 'https://www.countryflags.io/de/flat/64.png'},
      { id : 'dv', name : 'Divehi', imageUrl : 'https://www.countryflags.io/dv/flat/64.png'},
      { id : 'en', name : 'English', imageUrl : 'https://www.countryflags.io/en/flat/64.png'},
      { id : 'es', name : 'Spanish', imageUrl : 'https://www.countryflags.io/es/flat/64.png'},
      { id : 'fa', name : 'Persian', imageUrl : 'https://www.countryflags.io/fa/flat/64.png'},
      { id : 'fr', name : 'French', imageUrl : 'https://www.countryflags.io/fr/flat/64.png'},
      { id : 'ha', name : 'Hausa', imageUrl : 'https://www.countryflags.io/ha/flat/64.png'},
      { id : 'hi', name : 'Hindi', imageUrl : 'https://www.countryflags.io/hi/flat/64.png'},
      { id : 'id', name : 'Indonesian', imageUrl : 'https://www.countryflags.io/id/flat/64.png'},
      { id : 'it', name : 'Italian', imageUrl : 'https://www.countryflags.io/it/flat/64.png'},
      { id : 'ja', name : 'Japanese', imageUrl : 'https://www.countryflags.io/ja/flat/64.png'},
      { id : 'ko', name : 'Korean', imageUrl : 'https://www.countryflags.io/ko/flat/64.png'},
      { id : 'ku', name : 'Kurdish', imageUrl : 'https://www.countryflags.io/ku/flat/64.png'},
      { id : 'ml', name : 'Malayalam', imageUrl : 'https://www.countryflags.io/ml/flat/64.png'},
      { id : 'ms', name : 'Malay', imageUrl : 'https://www.countryflags.io/ms/flat/64.png'},
      { id : 'nl', name : 'Dutch', imageUrl : 'https://www.countryflags.io/nl/flat/64.png'},
      { id : 'no', name : 'Norwegian', imageUrl : 'https://www.countryflags.io/no/flat/64.png'},
      { id : 'pl', name : 'Polish', imageUrl : 'https://www.countryflags.io/pl/flat/64.png'},
      { id : 'pt', name : 'Portuguese', imageUrl : 'https://www.countryflags.io/pt/flat/64.png'},
      { id : 'ro', name : 'Romanian', imageUrl : 'https://www.countryflags.io/ro/flat/64.png'},
      { id : 'ru', name : 'Russian', imageUrl : 'https://www.countryflags.io/ru/flat/64.png'},
      { id : 'sd', name : 'Sindhi', imageUrl : 'https://www.countryflags.io/sd/flat/64.png'},
      { id : 'so', name : 'Somali', imageUrl : 'https://www.countryflags.io/so/flat/64.png'},
      { id : 'sq', name : 'Albanian', imageUrl : 'https://www.countryflags.io/sq/flat/64.png'},
      { id : 'sv', name : 'Swedish', imageUrl : 'https://www.countryflags.io/sv/flat/64.png'},
      { id : 'sw', name : 'Swahili', imageUrl : 'https://www.countryflags.io/sw/flat/64.png'},
      { id : 'ta', name : 'Tamil', imageUrl : 'https://www.countryflags.io/in/flat/64.png'},
      { id : 'tg', name : 'Tajik', imageUrl : 'https://www.countryflags.io/tg/flat/64.png'},
      { id : 'th', name : 'Thai', imageUrl : 'https://www.countryflags.io/th/flat/64.png'},
      { id : 'tr', name : 'Turkish', imageUrl : 'https://www.countryflags.io/tr/flat/64.png'},
      { id : 'tt', name : 'Tatar', imageUrl : 'https://www.countryflags.io/tt/flat/64.png'},
      { id : 'ug', name : 'Uyghur', imageUrl : 'https://www.countryflags.io/ug/flat/64.png'},
      { id : 'ur', name : 'Urdu', imageUrl : 'https://www.countryflags.io/pk/flat/64.png'},
      { id : 'uz', name : 'Uzbek', imageUrl : 'https://www.countryflags.io/uz/flat/64.png'},
      { id : 'zh', name : 'Chinese', imageUrl : 'https://www.countryflags.io/cn/flat/64.png'},
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
        //let req = { sura:this.selected.suggestion };
        let req = { q:this.selected.suggestion };
        if(req.q){
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
