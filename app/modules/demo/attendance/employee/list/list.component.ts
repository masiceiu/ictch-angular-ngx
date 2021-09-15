import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class EmployeeListComponent  {
employees:any[];
selectedEmployeeCountRadioButton: string = 'All';
constructor(){
this.employees = [
    {code:'emp101',name:'Alex',gender:'Male',annualSalary:'10000.13',    dateofbirth:'06/06/1990'},
      {code:'emp102',name:'Babu',gender:'Male',annualSalary:'40000.56',dateofbirth:'08/08/1995'},
      {code:'emp103',name:'Cat',gender:'Female',annualSalary:'3000.23',dateofbirth:'04/04/1990'},
      {code:'emp104',name:'Dog',gender:'Male',annualSalary:'2000.55',dateofbirth:'01/06/1998'},
      {code:'emp105',name:'Elephant',gender:'Male',annualSalary:'1000',dateofbirth:'05/05/1990'},
    ]
}

/*
getEmployees():void{
  this.employees = [
    {code:'emp101',name:'Alex',gender:'Male',annualSalary:'10000',    dateofbirth:'01/06/1990'},
      {code:'emp102',name:'Babu',gender:'Male',annualSalary:'40000',dateofbirth:'02/08/1995'},
      {code:"emp103",name:'Cat',gender:'Male',annualSalary:'3000',dateofbirth:'03/04/1990'},
      {code:'emp104',name:'Dog',gender:'Male',annualSalary:'2000.55',dateofbirth:'04/06/1998'},
      {code:'emp105',name:'Elephant',gender:'Male',annualSalary:'1000',dateofbirth:'05/05/1990'},
  ]
}
    
trackByEmpcode(index:number, employee:any): string {
  return employee.code
  }*/

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue:string):void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
     
  }

  getTotalEmployeeCount() :number 
  {
      return this.employees.length;
  }

  getTotalMaleEmployeeCount() :number 
  {
      return this.employees.filter(e => e.gender === 'Male').length;
  }

  getTotalFemaleEmployeeCount() :number 
  {
     return this.employees.filter(e => e.gender === 'Female').length;
  }
}
