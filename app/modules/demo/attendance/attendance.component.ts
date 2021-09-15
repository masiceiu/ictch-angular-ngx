import { Component, OnInit } from '@angular/core';
const BATCHATTENDANCE: BatchMonthlyAttendance[] = [{
  StudentID: '1',
  Name: 'Sampatkumar Dixit',
  Attendance: [
    {
      date: new Date(2017, 10, 2),
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
      date:new Date(2017,10,10),
      IsPresent:false,
      NoAttendance:false,
    }
  ]
}];
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  yearmonth: string = '';

  batchMontlyAttendance: BatchMonthlyAttendance[];

  daysInMonth: Date[];

  constructor() {
    this.yearmonth = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString();
    this.daysInMonth = new Array<Date>();
    this.getBatchAttendance();
    this.updateDaysInMonth();

    console.log("YearMonth=>",this.yearmonth);
  }

  getBatchAttendance() {  //this will call the http get service to get the attendance details from the DB
    this.batchMontlyAttendance = BATCHATTENDANCE;
  }

  monthChanged() {
    
    console.log("YearMonth=>",this.yearmonth);
    //this.updateDaysInMonth();

  }

  updateDaysInMonth() {
    let splitStr = this.yearmonth.split('-');
    let year = parseInt(splitStr[0]);
    let month = parseInt(splitStr[1]);
    var date = new Date(year, month - 1, 1);
    while (date.getMonth() + 1 === month) {
      this.daysInMonth.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    this.updateBatchAttendance();
    for(let i=0;i<this.batchMontlyAttendance.length;i++){ 
      //push in the updateBatchAttendance always adds the pushed date at the top, hence need to rearrange
      this.batchMontlyAttendance[i].Attendance.sort((a, b) => {
        return <any>new Date(a.date) - <any>new Date(b.date);
      })
      //this.batchMontlyAttendance[i].Attendance =
      /*
     this.batchMontlyAttendance[i].Attendance = _.orderBy(this.batchMontlyAttendance[i].Attendance,['date'],['asc']);*/
    }
    console.log("MontOf=>",date);
    console.log("MontlyAttendance=>",this.batchMontlyAttendance);
  }

  updateBatchAttendance() {
    for (let studentAttendance of this.batchMontlyAttendance) {
      for (let date of this.daysInMonth) {
        //if studentAttendance.Attendance array's date does not contain the daysInMonth's date then add a new AttendanceInMonth object to batchMonthlyAttendance array with isPreset as null

        if (studentAttendance.Attendance.filter(e => e.date == date).length <= 0)
        {
          this.batchMontlyAttendance.filter(e => e.StudentID === studentAttendance.StudentID).forEach(it=>it.Attendance.push({date:date,IsPresent:null,NoAttendance:true})); 
        }
        /*
        if (_.find(studentAttendance.Attendance, { date: date }) == null) {          
          _.find(this.batchMontlyAttendance, { StudentID: studentAttendance.StudentID }).Attendance.push({date:date,IsPresent:null,NoAttendance:true});            
        }*/
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
