import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  videoSource =
  "https://nv.vi-serve.com/vis-media/101/263/w_MD4H0BBdKt9t_F9ZNu_720p.mp4";
  file =
  "https://docs.google.com/uc?export=open&id=1-3O_0vamkRNKZf1oed7HBFKm2fNMcw-Z";
  src ='';
  constructor(private sanitizer:DomSanitizer){
    //let url = 
    this.src = window.URL.createObjectURL(
       new Blob([this.videoSource], { type: "video/mp4" })
     );
     //this.src = sanitizer.bypassSecurityTrustUrl(url);
     console.log(this.src);
   }
   public getSantizeUrl(url : string) {
     return this.sanitizer.bypassSecurityTrustUrl(url);
 }
  myFunction(url) {
    window.open(url,"","width=audio,height=245");
  }
  ngOnInit() {
  }
  name = "Angular";
  //https://drive.google.com/file/d/1-3O_0vamkRNKZf1oed7HBFKm2fNMcw-Z/view?usp=sharing
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
  }

  skip(value) {
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }

}
//https://stackoverflow.com/questions/25046301/convert-url-to-file-or-blob-for-filereader-readasdataurl