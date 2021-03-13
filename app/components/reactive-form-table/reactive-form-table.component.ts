import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form-table',
  templateUrl: './reactive-form-table.component3.html',
  styleUrls: ['./reactive-form-table.component.css']
})
export class ReactiveFormTableComponent implements OnInit {

  employeeForm: FormGroup;  
  columns:string[]; // priming turbo table columns 

  public invoiceForm: FormGroup;
  constructor(private _fb: FormBuilder, private formBuilder: FormBuilder) {
    this.columns = ["Name", "Address", "Salary", "IsActive", "Delete"];  
  }
  ngOnInit() {
    this.invoiceForm = this._fb.group({
      Rows: this._fb.array([this.initRows()])
    });
    this.createForm();
  }

  get formArr() {
    return this.invoiceForm.get("Rows") as FormArray;
  }
  /** 
   * Initializes the Form & by default adds an empty row to the PRIMENG TABLE 
   */  
  private createForm(): void {  
      this.employeeForm = this.formBuilder.group({   
        firstName: ['', Validators.required],
        lastName: [''],
        //tableRowArray is a FormArray which holds a list of FormGroups  
        tableRowArray: this.formBuilder.array([  
            this.createTableRow()  
        ])  
      })  
  }
  initRows() {
    return this._fb.group({
      name: [""]
    });
  }

  /** 
   * Returns the FormGroup as a Table Row 
   */  
  private createTableRow(): FormGroup {  
      return this.formBuilder.group({  
          name: new FormControl(null, {  
              validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)]  
          }),  
          address: new FormControl(null, {  
              validators: [Validators.required, Validators.maxLength(500)]  
          }),  
          salary: new FormControl(null, {  
              validators: [Validators.required, Validators.pattern(/^\d{1,6}(?:\.\d{0,2})?$/), Validators.minLength(3), Validators.maxLength(50)]  
          }),  
          isActive: new FormControl({  
              value: true,  
              disabled: true  
          })  
      });  
  }    

  addNewRow() {
    this.formArr.push(this.initRows());
  }
  get tableRowArray(): FormArray {  
    return this.employeeForm.get('tableRowArray') as FormArray;  
  }
  onAddNewRow(): void {  
    this.tableRowArray.push(this.createTableRow());  
  } 

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
  onDeleteRow(rowIndex:number): void {  
    this.tableRowArray.removeAt(rowIndex);  
  } 

}