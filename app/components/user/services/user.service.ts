import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class UserService {
  
  constructor(
    @Inject('apiBaseUrl') private apiUrl,
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}/users?delay=2`);
  }

  getUser(id) {
    return this.http.get(`${this.apiUrl}/users/${id}?delay=2`);
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