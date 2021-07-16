import { Injectable } from '@angular/core';
import { Observable, Subject, distinctUntilChanged } from 'rxjs';
export enum SCREEN_SIZE {
  XS,
  SM,
  MD,
  LG,
  XL
}
export interface WindowSize {
  width: number,
  height: number
};
//(0 = xs, 1 = sm, 2 = md, 3 = lg, 4 = xl)
@Injectable({
  providedIn: "root"
})
export class ResizeService {
  private resizeSubject: Subject<any>;
  constructor() {
    this.resizeSubject = new Subject();
  }

  get resize(): Observable<any> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  onResize(size: WindowSize) {
    //console.log(size);
    this.resizeSubject.next(size);
  }

}