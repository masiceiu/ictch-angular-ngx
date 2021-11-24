import { Component, OnInit } from '@angular/core';

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
 /*
	user: UserInfoModel = new UserInfoModel({
    id: "1", 
    guid: "D21ds12x", 
    uid: "cust2dsa12dsa", 
    first_name: "John", 
    last_name: "Doe", 
    email: "email@email.com", 
    zipcode: 10283,
    password: "Idasn2x2#",
    avatar: "https://avatars.githubusercontent.com/u/359395?v=4",
  });*/

  showSpinner = true;
  userId;
  user;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('err1');
   }

  ngOnInit() {
    this.subscriber = this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.getUser(params.id);
    });
    /*
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('err2',this.userId );
    if (this.userId) {
      this.getDetail();
    }
    //this.showSpinner = false;
    */
  }
  getUser(id) {
    this.showSpinner = true;
    this.userService.getUser(id).subscribe
    ((res: any) => {
      console.log(res);
      this.user = res.data;
      this.showSpinner = false;
    });
  }
  

	private subscriber: any;
  getOneUser() {
    /*
    this.subscriber = this.route.params.subscribe(params => {  
      this.http.get('/api/v1/customer/' + params.uid).subscribe((data:any) => {
       this.user = new UserInfoModel(data.customer);
     });
    });*/
  }
  getDetail() {
    this.userService.getUsers().subscribe
    ((res: any) => {
      this.user = res.data;
      this.showSpinner = false;
    }, (err: any) => {
      console.log(err);
    });
  }
}
