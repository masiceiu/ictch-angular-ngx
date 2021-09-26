import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-index-content',
  templateUrl: './search-index-content.component.html',
  styleUrls: ['./search-index-content.component.css']
})
export class SearchIndexContentComponent implements OnInit {
  @Input() list:any[] = [];
  constructor() { }

  ngOnInit() {
  }

}