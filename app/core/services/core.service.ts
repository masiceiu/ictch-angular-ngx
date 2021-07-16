import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface WindowSize {
  height: number,
  width: number
};

@Injectable({
  providedIn: "root"
})
export class CoreService {
  
  constructor(@Inject('windowObject') private window: Window) {
    
    Observable.fromEvent(window, 'resize')
        .auditTime(100)
        .map(event => <WindowSize>{ 
          width: event['currentTarget'].innerWidth, 
          height: event['currentTarget'].innerHeight
        })
        .subscribe((windowSize) => {
            this.windowSizeChanged.next(windowSize);
        })
  };
  
  readonly windowSizeChanged = new BehaviorSubject<WindowSize>(<WindowSize>{
    width: this.window.innerWidth,
    height: this.window.innerHeight
  });

}

import { OnDestroy, OnInit, Input, Component } from '@angular/core';
@Component({
  selector: 'app-core',
  template: `<h1>Window Width:</h1>
            <div *ngFor="let value of values">- {{ value.width }}</div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class CoreComponent implements OnInit, OnDestroy {
  private values: Array<WindowSize> = [];
  private anyErrors: boolean;
  private finished: boolean;
  private subscription;

  constructor(private service: CoreService) { }
  @Input() name: string;
  
  ngOnInit() {
    this.subscription = this.service.windowSizeChanged.subscribe(
          value => this.values.push(value),
          error => this.anyErrors = true,
          () => this.finished = true
      );
  }

  ngOnDestroy() {
    this.subscription = null;
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ CoreComponent ],
  imports:      [ BrowserModule, FormsModule ],
  providers: [ 
    { provide: 'windowObject', useValue: window}
  ]
})
export class CoreModule { }

