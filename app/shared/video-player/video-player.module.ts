import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayer01Component } from './video-player-01/video-player-01.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideoPlayer01Component],
  exports: [
    VideoPlayer01Component
  ]
})
export class VideoPlayerModule { }