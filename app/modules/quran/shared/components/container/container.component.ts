import {
  Component,
  ViewChild,
  ElementRef,
  NgZone, OnInit
} from "@angular/core";
import { timer, Observable } from "rxjs";
import { delayWhen, scan, share, take, tap } from "rxjs/operators";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  
  @ViewChild("container") container: ElementRef<HTMLDivElement>;

  messages: Observable<string[]>;
  existingMessages = ["Hi", "my", "friend"];

  constructor(private ngZone: NgZone) {
    this.messages = this.listenForMessages();
    this.scrollMessageBox(this.messages, this.ngZone);
  }

  ngOnInit() {
  }

  private scrollToBottom(): void {
    this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
  }

  private listenForMessages(): Observable<string[]> {
    return timer(0, 2000).pipe(
      scan(
        (list: string[], _tick: number) => [...list, list.length+":"+"Hi 🙌"],
        this.existingMessages
      ),
      take(20),
      share()
    );
  }

  private scrollMessageBox(data: Observable<string[]>, ngZone: NgZone) {
    // @TODO handle subscription
    data
      .pipe(
        delayWhen(() => ngZone.onStable),
        tap(() => this.scrollToBottom())
      )
      .subscribe();
  }

}