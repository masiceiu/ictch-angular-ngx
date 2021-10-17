import { Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
//@Injectable()
export class TimerService implements OnInit{
    private id:any = null;
    private timerItems: TimerItem[] = [];
    constructor() {
        //setInterval(() => this.checkItems(), 1000);
    }
    ngOnInit() {
      this.checkItems();
      this.id = setInterval(() => {
        this.checkItems(); 
      }, 1000);
    }
    
    ngOnDestroy() {
      if (this.id) {
        clearInterval(this.id);
      }
    }
    private checkItems() {
      console.log('timer');
        //let now = Date.now();
        //let removeKeys: string[] = [];
        //this.timerItems.filter(t => t.dueTime <= now).forEach(t => {
        //    this.dueTimeReachedSubject.next(t.key);
        //    removeKeys.push(t.key);
        //});
        //this.timerItems = this.timerItems.filter(t => removeKeys.indexOf(t.key) < 0);
    }

    public add(key: string, delayInSeconds: number) {
        let dueTime = Date.now() + delayInSeconds * 1000;
        let timerItem = this.timerItems.find(t => t.key === key);
        if (timerItem) {
            timerItem.dueTime = dueTime;
        }
        else {
            this.timerItems.push(new TimerItem(key, dueTime));
        }
    }   

    public remove(key: string) {
        this.timerItems = this.timerItems.filter(t => t.key !== key);
    }
}

class TimerItem {
    constructor(public key: string, public dueTime: number) { }
}