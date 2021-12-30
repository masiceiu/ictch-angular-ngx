import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayMediaComponent } from './play-media.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [    
    PlayMediaComponent,
    AudioPlayerComponent,
    VideoPlayerComponent
  ],
  declarations: [
    PlayMediaComponent,
    AudioPlayerComponent,
    VideoPlayerComponent
  ]
})
export class PlayMediaModule { }