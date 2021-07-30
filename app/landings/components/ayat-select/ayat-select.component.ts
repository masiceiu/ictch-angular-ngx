import { Component, OnInit } from '@angular/core';
import { AyatService } from '../../../core/services';

@Component({
  selector: 'app-ayat-select',
  templateUrl: './ayat-select.component.html',
  styleUrls: ['./ayat-select.component.css']
})
export class AyatSelectComponent implements OnInit {
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
    //this.btnDisabled = true;
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
        //this.btnDisabled = false;
      },
      ex => {
        console.log(ex.name);
        //this.btnDisabled = false;
      }
    );
  }
  private setAyatList(data, callBack = null): void {
    //console.log(data);
    this.service.getList(data).then(
      res => {
        this.ayatList = res;
        if (this.ayatList.length) {
          let newItem = this.ayatList[0];
          //currentIndex
          let newIndexId = (newItem.index - 0);
          let currentIndexId = (this.item.index - 0)||0;
          //console.log(newIndex,currentIndex);
          if(newIndexId < currentIndexId){
            newItem = this.ayatList[this.ayatList.length-1]
          }
          this.selectedAyat = newItem;
          this.item = this.selectedAyat;
        }
        if (callBack) {
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

  private item: any = {}; //ayat item
  btnDisabled = false;
  onClick(ev, switch_on): void {
    var fnAyatUpDown = function (ref,val){
      //console.log(index);
      let indexItem = ref.ayatList[index];
      //console.log(indexItem);
      if (indexItem) {
        ref.item = ref.selectedAyat = indexItem;
      } else {
        //console.log(ref.item);
        let indexAsId = (ref.item.index - 0) + val;
        //console.log(indexAsId);
        if(indexAsId){
          ref.setAyat(indexAsId, function(self) {
            let req = { sura: self.selectedSura };
            self.setAyatList(req);
          });          
        }
      }
    }
    let index = (this.selectedAyat.aya - 0);
    //console.log(index);
    switch (switch_on) {
      case '+':
        fnAyatUpDown(this,1);
        break;
      case '-':
        index--;
        index--;
        fnAyatUpDown(this,-1);
        break;
      case 'download':
        break;
    }/*
    let indexItem = this.ayatList[index];
    //console.log(indexItem);
    if (indexItem) {
      this.item = this.selectedAyat = indexItem;
    } else {
      //console.log(this.item);
      let indexAsId = this.item.index - 0 + 1;
      console.log(indexAsId);
      this.setAyat(indexAsId, function(self) {
        let req = { sura: self.selectedSura };
        self.setAyatList(req);
      });
    }*/
    
  }
}
/*ref-url-----------------------------
https://stackoverflow.com/questions/35978450/angular-2-dropdown-options-default-value

*/