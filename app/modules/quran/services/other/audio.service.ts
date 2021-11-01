
import {Injectable} from '@angular/core';
import { HttpService } from '..';

@Injectable({
  providedIn: "root"
})
export class AudioService{
  //public audio = new Audio();
  constructor(private httpService: HttpService) {

  }
  public play(){
    let audio = new Audio();
    audio.src = 'https://verses.quran.com/Alafasy/mp3/001001.mp3';
    audio.play();audio.onprogress = (v) => {
      const timeRanges = audio.buffered;
      if (timeRanges.length > 0) {
        const index = timeRanges.length - 1;
        // At the begining, the duration is same as max buffer time.(sometimes it's different)
        console.log(timeRanges.end(index > 0 ? index : 0), `the max buffer time`);
        console.log(audio.duration, 'audio.duration')
        console.log('-------new round--------');
      }
    };
  }
  /*
    onInit(): void {
    // A OSS dress
    this.audio.src = 'https://file.qingflow.com/uploads/file/301e7277-f354-4d65-9038-8b20b6de2e3e.mp3';
    this.audio.play();
    this.audio.onprogress = (v) => {
      const timeRanges = this.audio.buffered;
      if (timeRanges.length > 0) {
        const index = timeRanges.length - 1;
        // At the begining, the duration is same as max buffer time.(sometimes it's different)
        console.log(timeRanges.end(index > 0 ? index : 0), `the max buffer time`);
        console.log(this.audio.duration, 'audio.duration')
        console.log('-------new round--------');
      }
    };

    // after 5s, change another song.
    setTimeout(()=>{
      console.log('play a new song');
      this.audio.src = 'https://file.qingflow.com/uploads/file/a24e10a0-58bf-4d91-8273-1d0e9c182738.mp3';
      this.audio.play();
    },5000);
  }*/
  /*
  public inputTools(query:any, lan='bn'): Promise<any>{
    const url = "https://inputtools.google.com/request?text="+ (query || '???') 
    +"&&itc="+ (lan || 'en') +"-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8";
    return this.httpService.get(url);
  }*/
}
