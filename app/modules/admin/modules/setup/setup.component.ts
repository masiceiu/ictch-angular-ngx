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
    this.setupService.get("https://lifewhois.com/api/help").subscribe(res =>{
      console.log(res);
    });
  }

}