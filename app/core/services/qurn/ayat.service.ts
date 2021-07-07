import {Injectable} from '@angular/core';
import {HttpService} from './../';

@Injectable({
  providedIn: "root"
})
export class AyatService{
  constructor(private httpService: HttpService) {

  }

  public getList(): Promise<any>{
    const url = "https://ictcarehome.com/api/qurn/ayat/1";
    return this.httpService.get(url);
  }
}
