import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayer01Component } from './video-player-01/video-player-01.component';
import { VideoPlayer02Component } from './video-player-02/video-player-02.component';
import { VideoPlayerSnapshotComponent } from './video-player-snapshot/video-player-snapshot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideoPlayer01Component, VideoPlayer02Component, VideoPlayerSnapshotComponent],
  exports: [
    VideoPlayer01Component,
    VideoPlayer02Component,
    VideoPlayerSnapshotComponent
  ]
})
export class VideoPlayerModule { }