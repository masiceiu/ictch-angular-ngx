import { Component, OnInit, ɵConsole } from '@angular/core';
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
  selectedAyat;
  index1 = 1;
  private ayatList = [];
  constructor(private service: AyatService) {
    this.setAyatList({ sura: 1 });
  }

  ngOnInit() {}
  private setAyat(data, callBack = null): void {
    this.btnDisabled = true;
    this.service.get(data).then(
      res => {
        //this.ayatList = res;
        res.forEach((item, index) => {
          this.item = item;
          this.selectedSura = item.sura;
          //console.log(item,index);
        });
        if (callBack) {
          callBack(this);
        }
        this.btnDisabled = false;
      },
      ex => {
        console.log(ex.name);
      }
    );
  }
  private setAyatList(data, callBack = null): void {
    //console.log(data);
    this.service.getList(data).then(
      res => {
        this.ayatList = res;
        if (this.ayatList.length) {
          this.selectedAyat = this.ayatList[0];
          this.item = this.selectedAyat;
        }
        if (callBack) {
          console.log('?');
          callBack(this);
        }
        //console.log(res);
      },
      ex => {
        console.log(ex.name /*, ex*/);
      }
    );
  }
  onChangeItem($event, switch_on) {
    switch (switch_on) {
      case 'sura':
        let req = { sura: this.selectedSura };
        this.setAyatList(req);
        break;
      case 'ayat':
        this.item = this.selectedAyat;
        break;
    }
    /* 
    console.log($event,switch_on);
    console.log(this.selectedLanguage);
    console.log(this.selectedSura);
    console.log(this.selectedAyat);
    //console.log(this.selectedItem);
    */
  }

  private _counter = 1;
  private item: any = {}; //ayat item
  btnDisabled = false;
  onClick(ev, switch_on): void {
    let index = this.selectedAyat.aya - 0;
    /*function fn(val){
      let indexItem = this.ayatList[index];
      //console.log(indexItem);
      if (indexItem) {
        this.item = this.selectedAyat = indexItem;
      } else {
        //console.log(this.item);
        let indexAsId = this.item.index - 0 + 1;
        this.setAyat(indexAsId, function(self) {
          let req = { sura: self.selectedSura };
          self.setAyatList(req);
        });
      }
    }*/
    switch (switch_on) {
      case '+':
        index++;
        //fn(1);
        break;
      case '-':
        index--;
        //fn(1);
        break;
      case 'download':
        break;
    }
    let indexItem = this.ayatList[index];
    //console.log(indexItem);
    if (indexItem) {
      this.item = this.selectedAyat = indexItem;
    } else {
      //console.log(this.item);
      let indexAsId = this.item.index - 0 + 1;
      this.setAyat(indexAsId, function(self) {
        let req = { sura: self.selectedSura };
        self.setAyatList(req);
      });
    }
    
  }
}
/*ref-url-----------------------------
https://stackoverflow.com/questions/35978450/angular-2-dropdown-options-default-value

*/
