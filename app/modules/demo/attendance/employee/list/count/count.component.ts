import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class EmployeeCountComponent  {
    
    selectedRadioButtonValue: String = 'All';

    @Output()
    CountRadioButtonSlectionChanged: EventEmitter<String> = new EventEmitter<string>()   


    @Input() 
    all: number;

    @Input() 
    male: number;

    @Input() 
    female: number;

    onRadioButtonSelectionChange(){
      this.CountRadioButtonSlectionChanged.emit(this.selectedRadioButtonValue)
    }
}