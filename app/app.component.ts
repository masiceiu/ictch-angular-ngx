import { Component } from '@angular/core';
import { Router, 
  NavigationEnd, 
  ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-whois';
  payload:any = { current_url:"/", previous_url:"", app_nav_show:true };

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private tracking: AppService) {
      this.tracking.data.subscribe((payload: any) => {
        this.payload = Object.assign(this.payload, payload);
      });
    }
    ngOnInit() {
      this.router.events.pipe(filter(
        (event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe((event) => {
        this.tracking.update(
          {
            current_url:event.url, 
            previous_url:this.payload.current_url
          });
      });

    }
}
