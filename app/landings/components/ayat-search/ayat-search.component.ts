import { Component, OnInit, ɵConsole } from '@angular/core';
import { Observer, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GoogleService } from '../../../core/services';

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
  constructor(private service: GoogleService) { 

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
      this.lang = langs[0];

      this.suggestions$ = new Observable((observer: Observer<string>) => {
        observer.next(this.search);
      }).pipe(switchMap((query: string) => {console.log(query);
          if (query) {console.log(query);
            /*return this.service.inputTools(query).then(
              res => {
                console.log(res);
                return of(['a']);
            });*/
           return of(['a','b']);
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
    //this.selected = data.item;
    console.log(data.item);
  }
}  
