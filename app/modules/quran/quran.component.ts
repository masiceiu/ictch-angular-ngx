import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.css']
})
export class QuranComponent implements OnInit, AfterViewInit {

  constructor(private cdRef: ChangeDetectorRef) { 
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //this.cdRef.detectChanges();
  }
}