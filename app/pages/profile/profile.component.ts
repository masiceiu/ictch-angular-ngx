import { Component, OnInit } from '@angular/core';

import { ProfileService } from './profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ProfileService]
})
export class ProfileComponent implements OnInit {

  title = "My Profile";
  constructor(private service:ProfileService) {
      //console.log(this.service);
   }

  ngOnInit() {
  }

}