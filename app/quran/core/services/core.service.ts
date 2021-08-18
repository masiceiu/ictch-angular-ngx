import { Injectable, Inject } from '@angular/core';
import { fromEvent, BehaviorSubject /*Observable*/} from 'rxjs';
import { map } from 'rxjs/operators';


export interface WindowSize {
  height: number,
  width: number
};

@Injectable({
  providedIn: "root"
})
export class CoreService {
  /*
    fromEvent(this.elementRef.nativeElement, 'keyup')
    const obs = fromEvent(this.el.nativeElement, 'keyup')

  .pipe (
    map((e:any) => e.target.value), // extract the value of the input

    // filter((text:string) => text.length > 1), //filter out if empty

    debounceTime(250), //only search after 250 ms

    tap(() => this.loading.emit(true)), // Enable loading
    // search, call the search service

    map((query:string) => this.youtube.search(query)) ,
    // discard old events if new input comes in

    switchAll()
    // act on the return of the search
    ) 
*/
/*
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
  };*/
  constructor(@Inject('windowObject') private window: Window) {
    fromEvent(window, 'resize').pipe(
      map((event:any) => <WindowSize>{ 
          width: event['currentTarget'].innerWidth, 
          height: event['currentTarget'].innerHeight
        }),
        map((windowSize:any) => {
            this.windowSizeChanged.next(windowSize);
        })
    )};
  
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
  private subscription:any;
  @Input() name: string;

  constructor(private service: CoreService) { 
    this.name = "";
    this.finished = false
    this.anyErrors = false;
  }
  
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

