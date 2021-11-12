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

	private subscriber: any;
	ngOnInit()
	{
		this.subscriber = this.route.params.subscribe(params => {
	     console.log("params.group:",params.group);
	    //this.service.get('/api/v1/customer/' + params.uid).subscribe((data:any) => {
			//	this.user = new UserInfoModel(data.customer);
		  //});
	  });
	}

}