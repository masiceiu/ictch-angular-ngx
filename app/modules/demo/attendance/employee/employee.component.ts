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
  /**********************/
  yearmonth = moment().format('YYYY-M');
  dateInMonth = new Array<Date>();
  /**********************/
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
    console.log('yearmonth:', this.yearmonth)
    //this.dateInMonth.push(this.currentDate);
    //this.dateInMonth.push(moment(this.currentDate).add(1,'days'));
    console.log('dateInMonth:', this.dateInMonth);

    var day = this.currentDate.format('DD');
    var daysInMonth = moment(this.currentDate).daysInMonth();
    var date = moment(this.currentDate, 'DD/MM/YYYY').add(-day, 'days');

    console.log('yearmonth->day:', day);
    console.log('yearmonth->days:', daysInMonth);
    console.log('date:', date); 
    var start = moment(date).add(1, 'days');
    var end = moment(date).add(daysInMonth, 'days');
    console.log('start-end:', start,end); 
  }
  monthChanged() {
    
    
  }
  
    /*1#
    // cycle through last five days, today included
    // you could also cycle through any dates you want, mostly for
    // making this snippet not time aware
    const currentMoment = moment().subtract(4, 'days');
    const endMoment = moment().add(1, 'days');
    while (currentMoment.isBefore(endMoment, 'day')) {
      console.log(`Loop at ${currentMoment.format('YYYY-MM-DD')}`);
      currentMoment.add(1, 'days');
    }*/

    /*2#
    var fromDate = moment();
    var toDate = moment().add(15, 'days');

    var range = moment().range(fromDate, toDate);
    var diff = range.diff('days');*/
    /*3#
    function getRange(startDate, endDate, type) {
      let fromDate = moment(startDate)
      let toDate = moment(endDate)
      let diff = toDate.diff(fromDate, type)
      let range = []
      for (let i = 0; i < diff; i++) {
        range.push(moment(startDate).add(i, type))
      }
      return range
    }
    let range = getRange('2019-01-01', '2019-01-05', 'days')
    // moment dates -> [ '2019-01-01', '2019-01-02', '2019-01-03', '2019-01-04' ]
    */
    /*4#
    startdate = "20.03.2014";
    var new_date = moment(startdate, "DD-MM-YYYY").add('days', 5);

    var day = new_date.format('DD');
    var month = new_date.format('MM');
    var year = new_date.format('YYYY');

    alert(day + '.' + month + '.' + year);
    var new_date = moment(startdate, "DD-MM-YYYY").add('days', 5); 
    */
   /*5#
    moment().daysInMonth();
    moment("2012-02", "YYYY-MM").daysInMonth() // 29
    moment("2012-01", "YYYY-MM").daysInMonth() // 31

    Array.from(Array(moment('2020-02').daysInMonth()).keys())
    //=> [0, 1, 2, 3, 4, 5...27, 28]

    Array.from(Array(moment('2020-02').daysInMonth()), (_, i) => i + 1)
    //=> [1, 2, 3, 4, 5...28, 29]

    Array.from({length: moment('2020-02').daysInMonth()}, (x, i) => moment().startOf('month').add(i, 'days').format('DD'))
    // ["01","02","03", "04", ... "28","29"]

   */
}
//https://stackoverflow.com/questions/22547129/momentjs-date-string-add-5-days
//https://stackblitz.com/edit/angular-moment-example
//https://stackblitz.com/edit/angular-attendance-mock
//https://stackblitz.com/edit/employee-list