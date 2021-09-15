import { Component, OnInit } from '@angular/core';

import moment from 'moment';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  startDate: moment.Moment = moment('1/1/2017')
  currentDate: moment.Moment = moment();
  currentTime: string = moment().format('M/D/YYYY hh:mm:ss a');
  daysFrom2017: number;
  humanized: string;
  humanizedNow: string;
  weeks: number;

  constructor() {
    this.humanized = moment.duration(moment().diff(this.startDate)).humanize();
    this.humanizedNow = moment.duration(moment().diff(moment())).humanize();

    // if you need to force to number of days
    this.daysFrom2017 = this.currentDate.diff(moment('1/1/2017'), 'days');

    // if you need to force to number of weeks
    this.weeks = moment().diff(this.startDate, 'week');
    
    console.log('Days from 1/1/2017:', this.daysFrom2017);
    console.log('Current Time:', this.currentTime);
  }
  ngOnInit() {
  }
  
}
//https://stackblitz.com/edit/angular-moment-example
//https://stackblitz.com/edit/angular-attendance-mock
//https://stackblitz.com/edit/employee-list