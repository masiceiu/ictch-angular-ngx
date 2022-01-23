import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

declare var EventSource;

@Injectable()
export class SseService {

    constructor() {
    }

    observeMessages(sseUrl: string): Observable<any> {
        return new Observable<any>(obs => {
            const es = new EventSource(sseUrl);
            //console.log(es);
            es.addEventListener('ping', (evt) => {
                console.log('ping',evt.data);
            });
            es.addEventListener('message', (evt) => {
                obs.next(evt.data);
                //console.log(es.withCredentials);
                //console.log(es.readyState);
                //console.log(es.url);
                //console.log(evt);
                console.log('message',evt.data);
            });
            return () => es.close();
        });
    }
  // evtSource.addEventListener("ping", function(e) {
  //   var newElement = document.createElement("li");
  //
  //   var obj = JSON.parse(e.data);
  //   newElement.innerHTML = "ping at " + obj.time;
  //   eventList.appendChild(newElement);
  // }, false);
}