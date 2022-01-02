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
  name = 'Angular';
  image: File;
  resData: any;
  selectedFile = null;
  constructor(private service:ProfileService) {
    this.service.getAll().subscribe((res: any) => 
    {
      console.log(res);
    });
    /*
      this.service.getAll().subscribe(res =>
      {
        console.log(res);
      });
      */
   }

  ngOnInit() {
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onSubmit() {
    const payload = new FormData();
    payload.append('name', this.name);
    payload.append('image', this.selectedFile, this.selectedFile.name);
    this.service.postImg(payload).subscribe((res: any) => 
    {
      console.log(res);
    });
    /*.subscribe((data: any) => {
      this.resData = data;
      console.log(this.resData);
    });*/
  }
}