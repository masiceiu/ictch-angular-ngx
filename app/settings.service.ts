import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Config {
  [key: string]:any
}

@Injectable()
export class SettingsService {
  private _config:any
  constructor(private http: HttpClient) { }
  load(): any {
    this.http.get<any>('assets/config.json').subscribe(res =>
      {
        this._config = res;
      });
    //return this.http.get<any>('/assets/config.json').subscribe(res =>{return res;});  
  }
  get config(): any {
    return this._config;
  }
}
//https://angular.io/api/core/APP_INITIALIZER