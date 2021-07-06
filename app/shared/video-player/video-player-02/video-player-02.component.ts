import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoPlayerService } from './video-player.service';

@Component({
  selector: 'app-video-player-02',
  templateUrl: './video-player-02.component.html',
  styleUrls: ['./video-player-02.component.css'],
  providers: [VideoPlayerService]
})
export class VideoPlayer02Component implements OnInit {

  mediaID: string = "1402726504"; // 1630723954, 2667647842, 1402726504 
  video: any = {
    title: "",
    description: "",
    duration: "",
    key: ""
  }
  constructor(private videoPlayerService: VideoPlayerService) { }

  ngOnInit() {
    //this.getVideo(this.mediaID);
  }
  name = 'Video events';
  videoSource = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

  @ViewChild('videoPlayer') videoplayer: any;
  public startedPlay:boolean = false;
  public show:boolean = false;
  pauseVideo(videoplayer)
  {
    videoplayer.nativeElement.play();
    // this.startedPlay = true;
    // if(this.startedPlay == true)
    // {
      setTimeout(() => 
      {
        videoplayer.nativeElement.pause();
        if(videoplayer.nativeElement.paused)
        {
          this.show = !this.show;       
        } 
      }, 5000);
    // }
  }

  closebutton(videoplayer){
    this.show = !this.show; 
    videoplayer.nativeElement.play();
  }

  getVideo(mediaID: string) {
    this.videoPlayerService.getVideo(mediaID).subscribe((video: any) => {
      this.video.title = video.items[0].title; // set title
      this.video.description = video.items[0].description; // set description

      // set duration
      let duration = video.items[0].duration;
      let minutes = Math.floor(duration / 60);
      let seconds = Math.floor(duration % 60);
      this.video.duration = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

      this.video.key = video.items[0].assetDescriptors[1].key; // set key video src

      setTimeout(() => {
        //this.videoPlayer.nativeElement.play()
        //this.videoPlayer.nativeElement.pause();
      }, 0); // play
    })
  }
}