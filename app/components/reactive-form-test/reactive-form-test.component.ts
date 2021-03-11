import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  name = "Angular";
  master: FormGroup;
  details: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.master = this.formBuilder.group({
      customerName: "",
      email: "",
      items: this.formBuilder.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: "",
      description: "Some text here",
      price: ""
    });
  }

  addItem(): void {
    this.details = this.master.get("items") as FormArray;
    this.details.push(this.createItem());
  }

  onSubmit() {
    console.log(this.master.value);
  }

}