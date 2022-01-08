import { Component, OnInit } from '@angular/core';
import { SetupService } from './setup.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor(private setupService:SetupService) { }

  ngOnInit() {
    console.log("init");
    //this.setupService.get("https://lifewhois.com/api/help").subscribe(res =>{
    this.setupService.get("https://lifewhois.com/api/qurn/item").subscribe(res =>{
        console.log(res);
      },err=>{ console.log(err);});
    }

}