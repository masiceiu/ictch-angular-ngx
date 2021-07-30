import {Injectable} from '@angular/core';
import { HttpService } from '..';

@Injectable({
  providedIn: "root"
})
export class GoogleService{
  constructor(private httpService: HttpService) {

  }

  public inputTools(query:any, lan='en'): Promise<any>{
    console.log(query);
    const url = "https://inputtools.google.com/request?text="+ (query || '???') 
    +"&&itc="+ (lan || 'bn') +"-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8";
    return this.httpService.get(url);
  }
}
