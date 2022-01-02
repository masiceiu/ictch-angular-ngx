import { Component, OnInit, OnDestroy } from '@angular/core';
import {SseService} from './sse.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-sse',
  templateUrl: './sse.component.html',
  styleUrls: ['./sse.component.css'],
  providers:[SseService]
})
export class SseComponent implements OnInit, OnDestroy {

    private sseStream: Subscription;
    messages:Array<any> = [];

    constructor(private sseService: SseService){
    }

    ngOnInit() {
        this.sseStream = this.sseService.observeMessages('https://lifewhois.com/sse.php')
                        .subscribe((data:any) => {
                            this.messages.push(data);
                            console.log("msgs:",data);
                        });
    }

    ngOnDestroy() {
        if (this.sseStream) {
            this.sseStream.unsubscribe();
        }
    }
}
//https://stackoverflow.com/questions/36812714/using-rxjs-and-angular-2-in-order-to-deal-with-server-sent-events