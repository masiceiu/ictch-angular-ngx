import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import moment, { Moment } from 'moment';
import { TrackingService } from '../tracking.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public inputCode: string = '';
  public dateNow: Moment = moment();

  @ViewChild('code', {static: true}) code: ElementRef; 

  constructor(
    private trackingService: TrackingService
  ) {
  }

  @HostListener('window:focus', ['$event'])
  onFocus(event: any): void {
    //this._setFocus();
  }

  ngOnInit() {
    //this._setFocus();
    setInterval(_ => {
      this.dateNow = moment();
    }, 1000);
  }

  public register(evt) {
    if(evt.form.status === 'VALID') {
      console.log(this.inputCode, evt);
      this.trackingService.update({
        active: true
      })
    }
    this._setFocus();
    this.inputCode = '';
  }

  private _setFocus() {
    this.code.nativeElement.focus();
  }
}