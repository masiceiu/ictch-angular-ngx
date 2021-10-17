import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent implements OnInit {

  count = 0;
  marquee = { id:1, text:"This text will bounce", index:1, behavior:"alternate", direction:"down", 
              marquees:[
                { id:1, text:"This text will bounce", index:11, behavior:"alternate", direction:"left" },
                { id:2, text:"This text will bounce", index:12, behavior:"alternate", direction:"right" }
              ]
            };
  private id:any = null;
  constructor() {
  }
  ngOnInit() {
    //this.startInterval();
  }
  ngOnDestroy() {
    if (this.id) {
     clearInterval(this.id);
    }
  }
  private checkItems() {
    let i = this.count%2;
    this.marquee.marquees[i].index = this.count;
    this.count++;
    console.log ('Count is ' + this.count,i);
  }
  private startInterval() {
    this.id = this.start(()=>{
      this.checkItems();
    },1000);
    console.log(this.id);
  }
  private stopInterval() {
    if (this.id) {
      this.stop(this.id);
      this.id = null;
    }
    console.log(this.id);
  }
  private logInterval() {
    if (this.id) {
      console.log("this.id:",this.id);
    }
  }
  ary={a:0,b:0};
  private addInterval() {
    if (this.id) {
      console.log("this.id:",this.id);
    }
    this.ary['a']=this.start(()=>{
      console.log("ary:",this.ary.a);
    });
    this.ary['b']=this.start(()=>{
      console.log("ary:",this.ary.b);
    });
  }
  private delInterval() {
    if (this.id) {
      console.log("this.id:",this.id);
    }
    this.stop(this.ary.a);
    this.stop(this.ary.b);
  }
  start(callBack=()=>null,interval:number=1000):any {
    if(callBack){
      callBack();
      return setInterval(() => {
        callBack(); 
      }, interval);
    }
  }
  stop(id:number):void {
    if (id) {
      clearInterval(id);
    }
  }
}
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee
//https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit