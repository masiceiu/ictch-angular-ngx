import { Injectable } from '@angular/core';
export interface IStorage {
  [key: string]: any;
}
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  /*get ayatIndexSearched():any[]{
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
  }*/
  Get(key:string):IStorage {
    return JSON.parse(localStorage.getItem(key));
  }
  GetAny(key:string):any {
    return JSON.parse(localStorage.getItem(key));
  }
  GetList(key:string):any[] {
    return JSON.parse(localStorage.getItem(key));
  }
  GetItems(key:string):IStorage[] {
    return JSON.parse(localStorage.getItem(key));
  }
  Set(key:string, value:IStorage) {
    localStorage.setItem(key,JSON.stringify(value));
  }
  SetAny(key:string, value:any) {
    localStorage.setItem(key,JSON.stringify(value));
  }
  SetList(key:string, list:any[]) {
    localStorage.setItem(key,JSON.stringify(list));
  }
  HasKey(key:string): Boolean{
    return localStorage.hasOwnProperty(key);
  }
  SetItems(key:string, list:IStorage[]) {
    localStorage.setItem(key,JSON.stringify(list));
  }
  HasVal(key:string): Boolean{
    let val = localStorage[key];
    return (val!==undefined && val!==0 && val!==null && val!==false && val!=='')
  }
  Remove(key:string): void{
    localStorage.removeItem(key);
  }
  get Keys():string[]{
    return Object.keys(localStorage);
    /*let keys:string[] = [];
    for (var key in localStorage){
      keys.push(key);
      //console.log(key)
    }
    return keys;*/
    //return Object.entries(localStorage)
  }
  private parse(key:string) {
    return JSON.parse(localStorage.getItem(key));
  }
  //ref: https://stackoverflow.com/questions/8419354/get-html5-localstorage-keys
}
