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
    return new Promise<void>((resolve, reject) => {
       this._config = {};
       resolve();
    });
  }
  load1(): any {
    this.http.get<any>('/shared/data/config.json').subscribe(res =>
      {
        this._config = res;
        console.log(res);
      });
    //return this.http.get<any>('/assets/config.json').subscribe(res =>{return res;});  
  }
  load2() {
    const jsonFile = `../assets/config.json`
    return new Promise<void>((resolve, reject) => { 
        this.http
            .get(jsonFile)
            .toPromise()
            .then((response: any) => {
                resolve();
            })
            .catch((response: any) => {
                console.log(response)
                reject(
                    `Could not load app configuration file '${jsonFile}': ${JSON.stringify(
                        response
                    )}`
                )
            })
    })
}
  get config(): any {
    return this._config;
  }
}
//https://angular.io/api/core/APP_INITIALIZER