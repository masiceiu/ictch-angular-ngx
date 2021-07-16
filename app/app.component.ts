import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { ResizeService } from './core/services/config/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private cdRef: ChangeDetectorRef, private resizeService: ResizeService) { 
    //this.resizeService.resize
      //.subscribe(x => {
        //this.size = x;
     // });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.detectScreenSize('init:');
    this.cdRef.detectChanges();
  }
  @HostListener('window:resize', [])
  onResize() {
    this.detectScreenSize('hos:');
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