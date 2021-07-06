import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { noop, Observable, Observer, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

interface GitHubUserSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
}

interface GitHubUser {
  login: string;
  id:  number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  score: number;
}

@Component({
  selector: 'app-async-http-request-test',
  templateUrl: './async-http-request-test.component.html',
  styleUrls: ['./async-http-request-test.component.css']
})
export class AsyncHttpRequestTestComponent implements OnInit {
  search: string;
  suggestions$: Observable<GitHubUser[]>;
  errorMessage: string;
  search_query: string;

  // special
  selected: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.suggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search);
    }).pipe(
      switchMap((query: string) => {
        this.search_query = query;
        if (query) {
          // using github public api to get users by name
          return this.http.get<GitHubUserSearchResponse>(
            'https://api.github.com/search/users', {
            params: { q: query }
          }).pipe(
            map((data: GitHubUserSearchResponse) => data && data.items || []),
            tap(() => noop, err => {
              // in case of http error
              this.errorMessage = err && err.message || 'Something goes wrong';
            })
          );
        }
        return of([]);
      })
    );
  }
  onSelect(event: any): void {
    this.selected = event.item;
  }
}