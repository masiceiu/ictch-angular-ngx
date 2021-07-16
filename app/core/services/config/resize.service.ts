import { Injectable } from '@angular/core';
import { Observable, Subject, distinctUntilChanged } from 'rxjs';
export enum SCREEN_SIZE {
  XS,
  SM,
  MD,
  LG,
  XL
}
//(0 = xs, 1 = sm, 2 = md, 3 = lg, 4 = xl)
@Injectable({
  providedIn: "root"
})
export class ResizeService {

  get resize(): Observable<SCREEN_SIZE> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  private resizeSubject: Subject<SCREEN_SIZE>;

  constructor() {
    this.resizeSubject = new Subject();
  }

  onResize(size: SCREEN_SIZE) {
    
    this.resizeSubject.next(size);
  }

}