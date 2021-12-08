import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Config { [key: string]:any }
@Injectable()
export class AppService {
  
  private _config:any
  private _subject = new BehaviorSubject<object>({});
  public get data() { return this._subject.asObservable();}
  public update(obj:object) { this._subject.next(obj);}

  constructor(private http: HttpClient) { 
  }
  get config(): any {
    return this._config;
  }
  load() {
    const jsonFile = `/assets/json/config.json`
    return new Promise<void>((resolve, reject) => { 
      resolve();
      this._config = {};
        /*this.http
            .get(jsonFile)
            .toPromise()
            .then((response: any) => {
                resolve();
                console.log(response);
                this._config = response;
            })
            .catch((response: any) => {
                console.log(response)
                reject(
                    `Could not load app configuration file '${jsonFile}': ${JSON.stringify(
                        response
                    )}`
                )
            })*/
    })
  }
  get(url: string): any {
    /*this.http.get<any>('/shared/data/config.json').subscribe(res =>
      {
        this._config = res;
        console.log(res);
      });
      */
    return this.http.get<any>(url).subscribe(res =>{return res;});  
  }
}