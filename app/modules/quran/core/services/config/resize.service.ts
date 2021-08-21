import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, Subject/*, distinctUntilChanged*/ } from 'rxjs';
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
  //private resizeSubject: Subject<any>;
  private readonly _resize = new BehaviorSubject<any>({});
  constructor() {
    //this.resizeSubject = new Subject();
  }
  get resize(): BehaviorSubject<any> {
    return this._resize;
  }
  //get resize(): Observable<any> {
    //return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  //}

  onResize(size: any) {
    this.resize.next(size);
    //this.resizeSubject.next(size);
  }

}