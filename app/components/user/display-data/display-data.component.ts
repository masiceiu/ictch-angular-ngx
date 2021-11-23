import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ActivatedRoute } from '@angular/router';
import { UserInfoModel } from '../data-models/userInfo.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})

export class DisplayUserDataComponent implements OnInit
{

	user: UserInfoModel = new UserInfoModel({
    id: "1", 
    guid: "D21ds12x", 
    uid: "cust2dsa12dsa", 
    first_name: "John", 
    last_name: "Doe", 
    email: "email@email.com", 
    zipcode: 10283,
    password: "Idasn2x2#"
  });

  showSpinner = true;
  userId;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    //this.getUser();
    /*
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.userId) {
      this.getDetail();
    }*/
    this.showSpinner = false;
  }

  

	private subscriber: any;
  getUser() {
    /*
    this.subscriber = this.route.params.subscribe(params => {  
      this.http.get('/api/v1/customer/' + params.uid).subscribe((data:any) => {
       this.user = new UserInfoModel(data.customer);
     });
    });*/
  }
  getDetail() {
    this.userService.getUser(this.userId)
    .subscribe((res: any) => {
      this.user = res.data;
      this.showSpinner = false;
    }, (err: any) => {
      console.log(err);
    });
  }
}
