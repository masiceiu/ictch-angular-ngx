import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AppService {
  private _subject = new BehaviorSubject<object>({});
  public get data() { return this._subject.asObservable();}
  public update(obj:object) { this._subject.next(obj);}

  constructor() { }
}