import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  private _subject = new BehaviorSubject<object>({});
  public get data() { return this._subject.asObservable();}
  public update(obj:object) { this._subject.next(obj);}

  constructor(private http: HttpClient) { 
    this.http.get<any>('/shared/data/config.json').subscribe(res =>
      {
          console.log(res);
      });
  }
}