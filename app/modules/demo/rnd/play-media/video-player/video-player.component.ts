import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  videoSource =
  "https://docs.google.com/uc?export=open&id=1-3O_0vamkRNKZf1oed7HBFKm2fNMcw-Z";
  videoSource1 =
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
 public get getSrc(): string{
  //return this.file;
  return this.videoSource1;
  //return window.URL.createObjectURL(new Blob([this.videoSource]));
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
  
  download(videoSource: string) {
    console.log(videoSource);
    // Create an invisible A element
    const a = document.createElement("a");
    a.style.display = "none";
    document.body.appendChild(a);

    this.src = window.URL.createObjectURL(
      new Blob([videoSource], { type: "video/mp4" })
    );
    console.log(this.src);
    // Set the HREF to a Blob representation of the data to be downloaded
    a.href = this.src;

    // Use download attribute to set set desired file name
    a.setAttribute("download", "video");

    // Trigger the download by simulating click
    a.click();

    // Cleanup
    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
  }

}
//https://stackoverflow.com/questions/25046301/convert-url-to-file-or-blob-for-filereader-readasdataurl