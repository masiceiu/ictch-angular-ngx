import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoPlayerSnapshotService } from './video-player-snapshot.service';

@Component({
  selector: 'app-video-player-snapshot',
  templateUrl: './video-player-snapshot.component.html',
  styleUrls: ['./video-player-snapshot.component.css'],
  providers: [VideoPlayerSnapshotService]
})
export class VideoPlayerSnapshotComponent implements OnInit {

   mediaID: string = "1402726504"; // 1630723954, 2667647842, 1402726504 
  video: any = {
    title: "",
    description: "",
    duration: "",
    key: ""
  }

  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;

  constructor(private videoPlayerService: VideoPlayerSnapshotService) { 
  }

  ngOnInit() {
    this.getVideo(this.mediaID);
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

      this.video.key = video.items[0].assetDescriptors[1].key; // set key

      setTimeout(() => {
        //this.videoPlayer.nativeElement.play()
        //this.videoPlayer.nativeElement.pause();
      }, 0); // play
    })
  }

  getSnapshot() {
    let context = this.canvas.nativeElement.getContext('2d');

    context.drawImage(this.videoPlayer.nativeElement, 0, 0, 160, 120);
  }
}