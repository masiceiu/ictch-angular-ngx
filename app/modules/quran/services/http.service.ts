import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlService } from '.';
import { ISegment } from '../interfaces';

@Injectable({
  providedIn: "root"
})
export class HttpService{
  constructor(private http: HttpClient, private urlService: UrlService) {
  }

  // GET Method
  public get(url: string, params?: ISegment): Promise<any>{
    const buildUrl = (params !== undefined) ? url + '?' + this.urlService.paramsToUrl(params) : url;
    //console.log(buildUrl);
    const promise = new Promise( (resolve, reject) => {
      const req = this.http.get(buildUrl);
      req.subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        },
        () => {

        }
      );
    });
    return promise;
  }

}
