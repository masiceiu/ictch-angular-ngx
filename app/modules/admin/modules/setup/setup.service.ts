import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SetupService {
  private setupSource = new BehaviorSubject<object>({});
  public get data(): object {
    return this.setupSource.asObservable();
  }

  constructor(private http: HttpClient) {}

  public update(obj: object) {
    this.setupSource.next(obj);
  }
  get(url: string): any {
    return this.http.get<any>(url); 
  }
  set(url: string, data:any): any {
    return this.http.post<any>(url,data); 
  }
  del(url: string, data:any): any {
    return this.http.post<any>(url,data); 
  }

  post(url: string, data:any): any {
    return this.http.post<any>(url,data); 
    //this.http.post<any>(url, body, { headers });
  }
  add(url: string, data:any): any {
    return this.http.post<any>(url,data); 
  }
}
//https://stackblitz.com/edit/angular-http-post-examples
