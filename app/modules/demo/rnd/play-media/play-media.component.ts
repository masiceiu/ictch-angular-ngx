import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-media',
  templateUrl: './play-media.component.html',
  styleUrls: ['./play-media.component.css']
})
export class PlayMediaComponent implements OnInit {
  

  public audio = new Audio("https://docs.google.com/uc?download=open&id=1sqF1T_hf-Ci0f3gKrO4dsjWxykDxdQ_Y");
  constructor() { }

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
    this.audio.stop();
  }
  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
}