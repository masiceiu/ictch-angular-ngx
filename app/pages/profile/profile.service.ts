import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class ProfileService {
  
  constructor(
    @Inject('apiBaseUrl') private apiBaseUrl:string,
    private http: HttpClient
  ) { }

  getAll() {
    //console.log(`${this.apiBaseUrl}api/hgis/person`);
    return this.http.get(`${this.apiBaseUrl}api/hgis/person`);
  }

  getOne(id:any) {
    return this.http.get(`${this.apiBaseUrl}api/hgis/person/${id}`);
  }
  getSse(id:any) {
    return this.http.get(`${this.apiBaseUrl}api/hgis/person/${id}`);
  }
  postImg(payload:FormData) {
  
   return this.http
      .post(`https://srinu.org/Api.php?apicall=upload_sub_cat`,
        payload, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
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