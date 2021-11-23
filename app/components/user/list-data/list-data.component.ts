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
    
    this.userService.getUsers().subscribe
    ((res: any) => {
      const newRes = res.data.concat(res.data);
      this.users = newRes;
      this.showSpinner = false;
    });
  }
}