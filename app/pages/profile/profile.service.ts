import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class ProfileService {
  
  constructor(
    @Inject('apiBaseUrl') private apiBaseUrl:string,
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`${this.apiBaseUrl}/api/hgis/person`);
  }

  getOne(id:any) {
    return this.http.get(`${this.apiBaseUrl}/api/hgis/person/${id}`);
  }
  /*
  repos;
  constructor(http: HttpClient) {
    const path = 'https://api.github.com/search/repositories?q=angular&sort=stars&order=desc';
    this.repos = http.get<any>(path).pipe(map(data => data.items));

  }
  getUsers(): Observable<User[]> {
    return of(this.mockUsers);
  }*/
}