import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-media',
  templateUrl: './play-media.component.html',
  styleUrls: ['./play-media.component.css']
})
export class PlayMediaComponent implements OnInit {
  

  public audio = new Audio("https://docs.google.com/uc?download=open&id=1J-egV0_CTEVqWOgrPCMV3BBZXWPR-dIs");
  public audio1 = new Audio("https://docs.google.com/uc?download=open&id=16OUadcimdV65yvigTuhqrWo51EURaO-a");
  public audio2 = new Audio("https://docs.google.com/uc?download=open&id=1sqF1T_hf-Ci0f3gKrO4dsjWxykDxdQ_Y");
  
  constructor() {
      //this.audio.load();
   }
  //https://drive.google.com/file/d//view?usp=sharing
  ngOnInit() {
    let track_list = [
      {
      id:"195",
      sl: "114",
      name: "114.195. Surah An-Nas (1 - 6)",
      title: "114.195. Surah An-Nas (1 - 6).mp3",
      artist: "Islamic",
      image: "https://docs.google.com/uc?export=open&id=1Vjakr5hhEo8SbWacX7mFnGbtAARkbsyb",
      path: "https://docs.google.com/uc?export=open&id=1sqF1T_hf-Ci0f3gKrO4dsjWxykDxdQ_Y",
      path1: "https://docs.google.com/uc?download=open&id=1sqF1T_hf-Ci0f3gKrO4dsjWxykDxdQ_Y",
      path2: "https://docs.google.com/uc?export=open&id=1sqF1T_hf-Ci0f3gKrO4dsjWxykDxdQ_Y",
      path3: "http://domain.com/folder/file_name.mp3",
      },
    ];
  }
  pay(): void {
    this.audio.play();
  }
  stop(): void {
    this.audio.pause();
  }


  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
  playlist = [
    {
      title: "Tha Kar ke",
      link: "https://funksyou.com/fileDownload/Songs/128/13080.mp3"
    },
    {
      title: "Golmal",
      link: "https://funksyou.com/fileDownload/Songs/128/13091.mp3"
    }
  ];
}

/*
https://stackoverflow.com/questions/44883501/play-sound-in-angular-4
playAudio(){
  let audio = new Audio();
  audio.src = "../../../assets/audio/alarm.wav";
  audio.load();
  audio.play();
}
this.playAudio();
*/