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
  showSpinner = true;
  user:any = {};

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
   }

  ngOnInit() {
    this.subscriber = this.activatedRoute.params.subscribe(params => {
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
  getUser(id:any) {
    this.showSpinner = true;
    this.userService.getUser(id).subscribe
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
}
