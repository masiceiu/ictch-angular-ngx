import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from '../data-models/userInfo.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class UserListDataComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();  
    this.showSpinner = false;
  }

  showSpinner = true;
  users;
  getUsers() {
    /*
    this.userService.getUsers()
    .subscribe((res: any) => {
      const newRes = res.data.concat(res.data);
      this.users = newRes;
      this.showSpinner = false;
    });*/

    this.users = [new UserInfoModel(
      {
        id: "1", 
        guid: "D21ds12x", 
        uid: "cust2dsa12dsa", 
        first_name: "John", 
        last_name: "Doe", 
        email: "email@email.com", 
        zipcode: 10283,
        password: "Idasn2x2#"
      })
    ];
  }
}