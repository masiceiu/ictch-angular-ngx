import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayMediaComponent } from './play-media.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [    
    PlayMediaComponent,
    AudioPlayerComponent
  ],
  declarations: [
    PlayMediaComponent,
    AudioPlayerComponent
  ]
})
export class PlayMediaModule { }