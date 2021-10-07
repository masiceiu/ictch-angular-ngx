import { Injectable } from '@angular/core';
export interface IStorage {
  [key: string]: any;
}
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  get ayatIndexSearched():any[]{
    let key = 'ayatIndexSearched';
    let storage = this.parse(key);
    if (!storage) {
      return [];
    }
    return storage;
  }
  set ayatIndexSearched(list:any[]) {
    let key = 'ayatIndexSearched';
    localStorage.setItem(key,JSON.stringify(list));
  }
  Get(key:string):IStorage {
    return JSON.parse(localStorage.getItem(key));
  }
  Set(key:string, value:IStorage) {
    localStorage.setItem(key,JSON.stringify(value));
  }
  private parse(key:string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
