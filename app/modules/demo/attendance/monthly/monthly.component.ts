import { Component, OnInit } from '@angular/core';
const BATCHATTENDANCE: BatchMonthlyAttendance[] = [{
  StudentID: '1',
  Name: 'Sampatkumar Dixit',
  Attendance: [
    {
      date: new Date(new Date().getFullYear(), new Date().getMonth()+1, -1),
      IsPresent: true,
      NoAttendance:false,
    },
    {
      date: new Date(new Date().getFullYear(), new Date().getMonth()+1, 0),
      IsPresent: true,
      NoAttendance:false,
    }
  ]
},
{
  StudentID:'2',
  Name:'Sachin Ramesh Tendulkar',
  Attendance:[
    {
      date:new Date(new Date().getFullYear(),new Date().getMonth()+1,1),
      IsPresent:false,
      NoAttendance:false,
    }
  ]
}];
@Component({
  selector: 'app-monthly-attendance',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {
  yearmonth: string = '';

  batchMontlyAttendance: BatchMonthlyAttendance[];

  daysInMonth: Date[];

  constructor() {
    let month = (new Date().getMonth()+1).toString();
    this.yearmonth = new Date().getFullYear().toString() + '-' + (month.length>1?month:'0'+month);
    //console.log("YearMonth=>",this.yearmonth);
    this.daysInMonth = new Array<Date>();
    this.getBatchAttendance();
    this.updateDaysInMonth();

    //console.log("YearMonth=>",this.yearmonth);
  }

  ngOnInit() {

  }
  getBatchAttendance() {  //this will call the http get service to get the attendance details from the DB
    this.batchMontlyAttendance = BATCHATTENDANCE;
  }

  monthChanged() {
    //this.daysInMonth = new Array<Date>();
    console.log("YearMonth=>",this.yearmonth);

    this.updateDaysInMonth();
  }

  updateDaysInMonth() {
    let splitStr = this.yearmonth.split('-');
    let year = parseInt(splitStr[0]);
    let month = parseInt(splitStr[1]);
    var date = new Date(year, month-1, 1);
    console.log(date.getMonth(),this.daysInMonth);
    while (date.getMonth() + 1 === month) {
      //console.log('1=>',date,date);
      date.setDate(date.getDate() + 1);
      //console.log('2=>',date,date);
      this.daysInMonth.push(new Date(date));
    }
    console.log('=>',this.daysInMonth[0]);
    this.updateBatchAttendance();
    for(let i=0;i<this.batchMontlyAttendance.length;i++){ 
      //push in the updateBatchAttendance always adds the pushed date at the top, hence need to rearrange
      //this.batchMontlyAttendance[i].Attendance = this.batchMontlyAttendance[i].Attendance.sort((a, b) => {
       this.batchMontlyAttendance[i].Attendance.sort((a, b) => {
        //console.log(a.date.valueOf() - b.date.valueOf());
        //return a.date.valueOf() - b.date.valueOf();
        //return <any>a.date.toString() - <any>b.date.toString();
        return <any>new Date(a.date) - <any>new Date(b.date);
      })
      
     //this.batchMontlyAttendance[i].Attendance = _.orderBy(this.batchMontlyAttendance[i].Attendance,['date'],['asc']);
    }
  }

  updateBatchAttendance() {
    for (let studentAttendance of this.batchMontlyAttendance) {
      for (let date of this.daysInMonth) {
        if (studentAttendance.Attendance.filter(e => e.date.valueOf() == date.valueOf()).length <= 0)
        {
          this.batchMontlyAttendance.filter(e => e.StudentID === studentAttendance.StudentID).forEach(it=>it.Attendance.push({date:date,IsPresent:null,NoAttendance:true})); 
        }
      }

    }

  }
}

export class BatchMonthlyAttendance {
  StudentID: string;
  Name: string;
  Attendance: AttendanceInMonth[];
}

export class AttendanceInMonth {
  date: Date;
  IsPresent: Boolean;
  NoAttendance:Boolean=false;
}
//https://stackoverflow.com/questions/4345045/loop-through-a-date-range-with-javascript