import { Component, OnInit } from '@angular/core';
import { PagerComponent } from './pager.component';
import { PagingService } from './paging.service';

@Component({
  selector: 'app-paging-test',
  templateUrl: './paging-test.component.html',
  styleUrls: ['./paging-test.component.css'],
  providers: [ PagingService ],
})
export class PagingTestComponent implements OnInit {

  items: object[];
  fieldNames: string[];
  pageIndex: number;
  pageSize: number;

  constructor(appService: PagingService) {
    this.items = appService.getOrders(100);
    this.fieldNames = [ 'No', '商品名', '受注日', '金額' ];
    this.pageIndex = 0;
    this.pageSize = 10;
  }
  ngOnInit() {
  }

}