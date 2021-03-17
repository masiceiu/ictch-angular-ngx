import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-datatables-pagination',
  templateUrl: './datatables-pagination.component.html',
  styleUrls: ['./datatables-pagination.component.css']
})
export class DatatablesPaginationComponent implements OnInit {

  constructor() { }
name = 'Angular';

  ngOnInit() {
    let table = $('#example').DataTable({
      drawCallback: () => {
        $('.paginate_button.next').on('click', () => {
            this.nextButtonClickEvent();
          });
      }
    });
  }

  buttonInRowClick(event: any): void {
    event.stopPropagation();
    console.log('Button in the row clicked.');
  }

  wholeRowClick(): void {
    console.log('Whole row clicked.');
  }

  nextButtonClickEvent(): void {
    //do next particular records like  101 - 200 rows.
    //we are calling to api

    console.log('next clicked')
  }
  previousButtonClickEvent(): void {
    //do previous particular the records like  0 - 100 rows.
    //we are calling to API
  }
}