import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { ResizeService } from './core/services/config/resize.service';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.component.html',
  styleUrls: ['./quran.component.css']
})
export class QuranComponent implements OnInit, AfterViewInit {

  constructor(private cdRef: ChangeDetectorRef, private resizeService: ResizeService) { 
    /* Test */
    //this.resizeService.resize
      //.subscribe(x => {
        //this.size = x;
     // });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //this.detectScreenSize('init:');
    //this.cdRef.detectChanges();
  }
  @HostListener('window:resize', [])
  onResize() {
    //this.detectScreenSize('hos:');
  }
  detectScreenSize(log: any) {
    (function detectChanges(self) {
      let size = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      self.resizeService.onResize(size);
    })(this);
  }
}