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
    var evtSource = new EventSource("https://lifewhois.com/sse.php", { withCredentials: true });

    evtSource.onmessage = (e) => {
      console.log('connection message');
       console.log(e.data);
   }
   evtSource.onerror = (e) => {
      console.log('connection error');
       console.log(e);
       evtSource.close();
   }
   evtSource.onopen = (e) => {
      console.log('connection open');
       console.log(e);
   }
   /*evtSource.addEventListener("ping", function(event) {
    const newElement = document.createElement("li");
    const eventList = document.getElementById("list");
    const time = JSON.parse(event.data).time;
    newElement.textContent = "ping at " + time;
    eventList.appendChild(newElement);
  });*/
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