import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { noop, Observable, Observer, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-google-input-tools-test',
  templateUrl: './google-input-tools-test.component.html',
  styleUrls: ['./google-input-tools-test.component.css']
})
export class GoogleInputToolsTestComponent implements OnInit {
  search: string;
  suggestions$: Observable<any[]>;
  errorMessage: string;
  search_query: string;

  @Input() lan= 'bn';
  // special
  results: any;
  selected: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.suggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search);
    }).pipe(
      switchMap((query: string) => {
        //this.search_query = query;
        if (query) {
          /* 
          ["SUCCESS",[["sobhan",["সোবহান","সোভান","শোভন","সোবাহান","শোভান"],[],{"candidate_type":[0,0,0,0,0]}]]]*/
          // using github public api to get users by name
          return this.http.get<any>(
            'https://inputtools.google.com/request?text='+ (query || "sobhan") 
            +'&&itc='+ (this.lan || "en") +'-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8').pipe(
            //map((data: any) => data || []),
            map((data: any) => {
              this.search_query = data;
              if(data.length > 0 && data[1].length > 0 && data[1][0].length > 0 && data[1][0][1].length > 0){
                let res = (data[1][0][1]);
                res[5] = query
                //return res;
                /**/
                this.results = Object.keys(res).map(key => ({ 
                  'index' : key, 
                  'suggestion' : res[key] 
                  }));
                return this.results;
                //return of(this.results);
              }
            }),
            tap(() => noop, err => {
              // in case of http error
              this.errorMessage = err && err.message || 'Something goes wrong';
            })
          );
        }
        return of([]);
      })
    );
  }
  onSelect(event: any): void {
    this.selected = event.item;
  }
}