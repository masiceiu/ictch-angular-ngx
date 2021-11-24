import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Config {
  [key: string]:any
}

@Injectable()
export class SettingsService {
  constructor(private http: HttpClient) { }

  load(): any {
    return this.http.get<any>('/assets/config.json')
      .subscribe(res =>{return res;});
  }
}
