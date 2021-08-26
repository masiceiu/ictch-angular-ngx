import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.css']
})
export class QuranComponent implements OnInit, AfterViewInit {

  @Input() title="";
  constructor(private cdRef: ChangeDetectorRef) { 
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //this.cdRef.detectChanges();
  }
}