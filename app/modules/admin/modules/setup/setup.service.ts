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
}
