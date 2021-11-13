import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AyatService } from './../../../services';
@Component({
  selector: 'app-ayat-groups',
  templateUrl: './ayat-groups.component.html',
  styleUrls: ['./ayat-groups.component.css']
})
export class AyatGroupsComponent implements OnInit {

  constructor(private service: AyatService, private route: ActivatedRoute) {
	}

	private ayatGroups: any[] = [];
	private groupAyats: any[] = [];

	private subscriber: any;
	ngOnInit()
	{
		this.ayatGroups = [
      { id:"a", name:"Group Emoji Frown", icon:"emoji-frown" },
      { id:"b", name:"Group Emoji Smile", icon:"emoji-smile" }
    ];
		//this.service.get('/api/v1/customer/' + params.uid).subscribe((data:any) => {
			//	this.user = new UserInfoModel(data.customer);
		//});
		this.subscriber = this.route.params.subscribe(params => {
	     console.log("params.group:",params.group);
	    //this.service.get('/api/v1/customer/' + params.uid).subscribe((data:any) => {
			//	this.user = new UserInfoModel(data.customer);
		  //});
	  });
	}

}