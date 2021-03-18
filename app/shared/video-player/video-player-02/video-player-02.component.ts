import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoPlayerService } from './video-player.service';

@Component({
  selector: 'app-video-player-02',
  templateUrl: './video-player-02.component.html',
  styleUrls: ['./video-player-02.component.css'],
  providers: [VideoPlayerService]
})
export class VideoPlayer02Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}