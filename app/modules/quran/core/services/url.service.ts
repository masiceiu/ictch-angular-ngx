import {Injectable} from '@angular/core';

import {ISegment} from './../interfaces';

@Injectable({
  providedIn: "root"
})
export class UrlService{

  // Return URL parameter from Object
  public paramsToUrl(params: ISegment): string{
    if (Object.keys(params).length !== 0){
      let str = '';

      for (const key in params){
        if (params[key] !== undefined && params[key] !== null){
          if (str !== ''){
            str += '&';
          }
          str += key + '=' + encodeURIComponent(params[key]);
        }
      }
      return str;
    }
    else {
      return '';
    }
  }

}
