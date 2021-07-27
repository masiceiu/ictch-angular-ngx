import { Component, OnInit } from '@angular/core';
import { AyatService } from '../../../core/services';

@Component({
  selector: 'app-ayat-search',
  templateUrl: './ayat-search.component.html',
  styleUrls: ['./ayat-search.component.css']
})
export class AyatSearchComponent implements OnInit {
  selectedItem;
  selectedLanguage = 'en_ahmedali';
  selectedSura = '1';
  selectedAyat = '1';

  constructor(private service: AyatService) { }

  ngOnInit() {
  }
  onChangeItem($event, switch_on) {
    switch(switch_on){
      case"sura":
       break;
    }  
    console.log($event,switch_on);
    console.log(this.selectedLanguage);
    console.log(this.selectedSura);
    console.log(this.selectedAyat);
    //console.log(this.selectedItem);
  }
  
  private _counter = 1;
  private item :any = {};
  addNewDisabled = false;
  addNew(ev): void {
    console.log('ev:',ev);
      this.addNewDisabled = true;
      this.service.get(this._counter++).then(res => {
        //this.ayatList = res;
        res.forEach((item,index)=>{
          this.item = item;
          this.selectedSura = item.sura;
          console.log(item,index);
       });      
       this.addNewDisabled = false;
    },ex=>{console.log(ex.name/*, ex*/);});
  }
}