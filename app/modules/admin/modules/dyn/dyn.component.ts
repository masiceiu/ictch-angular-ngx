import { Component, OnInit } from '@angular/core';
import { Injectable, NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable()
export class SseService {
  constructor(private _zone: NgZone) {}
  getServerSentEvent(url: string): Observable<any> {
    return new Observable((observer) => {
      const eventSource = this.getEventSource(url);
      eventSource.onmessage = (event) => {
        this._zone.run(() => {
          observer.next(event);
        });
      };
      eventSource.onerror = (error) => {
        this._zone.run(() => {
          observer.error(error);
        });
      };
    });
  }
  private getEventSource(url: string): EventSource {
    return new EventSource(url);
  }
}
@Component({
  selector: 'app-dyn',
  templateUrl: './dyn.component.html',
  styleUrls: ['./dyn.component.css'],
  providers: [SseService],
})
export class DynComponent implements OnInit {
  constructor(private sseService: SseService) {
    this.sseService
      .getServerSentEvent('https://lifewhois.com/sse.php')
      .subscribe((res:any) => {
        //messages.push(message);
        console.log("dyn:",res);
      });
  }

  ngOnInit() {}
}
