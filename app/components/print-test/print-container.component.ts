import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-container',
  templateUrl: './print-container.component.html',
  styleUrls: ['./print-container.component.css']
})
export class PrintContainerComponent implements OnInit {

  //https://stackblitz.com/edit/angular-printing-solution?file=src%2Fapp%2Fmain-page%2Fmain-page.component.html
  constructor() { }

  ngOnInit() {
  }

  printPage() {
    window.print();
  }
}