import { DatePipe } from '@angular/common';
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

  months = [];
  years = [];
  dates = [];
  tform = [
    '',
    'shortDate',
    'short',
    'longDate',
    'yyyy-MM-dd',
    'yyyy-MM-dd hh:mm:ss'
  ]
  ngOnInit() {
    /*
    this.months = this.getMonths();
    this.years = this.getYears();*/
    //this.dates = this.getDates(new Date(), new Date());
    var start = new Date("02/05/2013");
    var end = new Date("02/10/2013");
    console.log(this.transform(new Date("2023,01,01"),this.tform[4]))
    console.log(this.transform(new Date("2023,01,31"),this.tform[4]))
    
    //this.dates = this.getDates(new Date("2023,01,01"), new Date("2023,01,31"));
    //this.dates = this.getDates(
    // new Date(new Date().getFullYear(), new Date().getMonth()+1, 0), 
    // new Date(new Date().getFullYear(), new Date().getMonth()+1, 0));    
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
    //console.log(date.getMonth(),this.daysInMonth);
    while (date.getMonth() + 1 === month) {
      //console.log('1=>',date,date);
      date.setDate(date.getDate() + 1);
      //console.log('2=>',date,date);
      this.daysInMonth.push(new Date(date));
    }
    //console.log('=>',this.daysInMonth[0]);
    this.updateBatchAttendance();
    for(let i=0;i<this.batchMontlyAttendance.length;i++){ 
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

  getDates(start, end) {
    var arr = [];
    var dt = new Date(start.getDate());
    arr.push(start);
    arr.push(end);
    /*while (dt <= end) {
      const d = `${this.daterRequestFormatter(new Date(dt).toString())}`;
        arr = [...arr, d];
        // arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }*/
    return arr;
};


  getMonths() {
  const today = new Date();
  const date = ((d) => new Date(d.setFullYear(d.getFullYear() - 1)))(
    new Date()
  );
  let months = [];
  let monthDate = new Date(date.setMonth(date.getMonth() - 1));
  do {
    monthDate = new Date(date.setMonth(date.getMonth() + 1));
    const month = (monthDate.getMonth() + 1).toString();
    const mm = month.length < 2 ? `0${month}` : month;
    months = [...months, `${mm}`];
  } while (new Date(monthDate.setMonth(monthDate.getMonth() + 1)) <= today);
  return months;
}

  getYears() {
    const today = new Date();
    const date = (d => new Date(d.setFullYear(d.getFullYear() - 1)))(
      new Date()
    );
    let months = [];
    let month = new Date(date.setMonth(date.getMonth() - 1));
    do {
      month = new Date(date.setMonth(date.getMonth() + 1));
      // months = [...months, this.daterMonthsNamesHebFormatter(month)];
      months = [...months, this.daterMonthsNamesHebFormatter(month)];
    } while (new Date(month.setMonth(month.getMonth() + 1)) <= today);
    return months;
  }

  transform(date: string | number | Date, format='mediumDate', timezone?, locale?):any {
    if (typeof date === 'string') {
      const str = date.replace(/[^0-9]/g, '');
      const [year, month, day] = 
        [str.substring(0,4), str.substring(4,2), str.substring(6,2)];
      const [hour, min, sec] = 
        [str.substring(8,2), str.substring(10,2), str.substring(12,2)];
      date = new Date(+year, +month - 1, +day, +hour, +min, +sec);
    } 

    const datePipe = new DatePipe(locale || 'en');
    return datePipe.transform(date, format);

  }
  // RETURN date YYYY-MM
  public daterRequestFormatter(date: string) {
    if (!date) {
      return "";
    }
    return date;
    //return moment(date).format("MM.YYYY");
  }

    public daterMonthsNamesHebFormatter(date: any) {
    if (!date) {
      return "";
    }
    return date;
    //return moment(date).locale('heb').format('MMMM');
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
//https://stackblitz.com/edit/angular-local-date-pipe
//https://stackoverflow.com/questions/4345045/loop-through-a-date-range-with-javascript