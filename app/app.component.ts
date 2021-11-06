import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'life-whois';
  payload:any = { currentUrl:"/", previousUrl:"" };

  constructor(
    private router: Router, 
    private tracking: AppService) {

    }
    ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.payload.previousUrl = this.payload.currentUrl;
      this.payload.currentUrl = event.url;
    });
    this.tracking.update(this.payload);
    console.log("tracking",this.payload);
  }
}
