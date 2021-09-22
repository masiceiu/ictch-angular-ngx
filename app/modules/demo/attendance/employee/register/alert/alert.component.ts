import { Component, OnInit } from '@angular/core';
import { TrackingService } from './../../tracking.service';

@Component({
  selector: 'app-employee-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  public isShow: boolean = false;
  public isSuccess: boolean = false;

  constructor(
    private trackingService: TrackingService
  ) { }

  ngOnInit() {
    this.trackingService.data$.subscribe(e => {
      this.isShow = e['active'];
      this.isSuccess = true;
      this._hiddenMessage();
    })
  }

  private _hiddenMessage() {
    setTimeout(_ => {
      this.isShow = false;
    }, 2000);
  }

}