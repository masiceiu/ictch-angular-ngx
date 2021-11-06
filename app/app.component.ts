import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'life-whois';
  payload:any = { current_url:"/", previous_url:"", app_nav_show:true };

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private tracking: AppService) {
      //console.log("router",this.router);
      this.tracking.data.subscribe((payload: any) => {
        /*if(payload.hasOwnProperty('app_nav_show')){
          this.payload.app_nav_show = payload.app_nav_show;
        }*/
        this.payload = Object.assign(this.payload, payload);
        console.log('res: ', payload);
        console.log("tracking",this.payload);
        //console.log("route",this.route);
      });
    }
    ngOnInit() {
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        //this.payload.previous_url = this.payload.current_url;
        //this.payload.current_url = event.url;
        //this.tracking.update(this.payload);
        this.tracking.update({current_url:event.url, previous_url:this.payload.current_url});
        //console.log("tracking",this.payload);
      });
    }
}
