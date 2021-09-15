import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TrackingService {

  private dataSource = new BehaviorSubject<object>({
    active: false,
    payload: {}
  });
  public data$ = this.dataSource.asObservable();

  constructor() { }

  public update(obj) {
    this.dataSource.next(obj);
  }

}