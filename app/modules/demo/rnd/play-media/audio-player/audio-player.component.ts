import { Component, OnInit, Input } from '@angular/core';
import { AudioPlayerService } from './audio-player.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  @Input() audioUrl: string;

  state: MediaState;

  constructor(private audioService: AudioPlayerService) {
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }

  ngOnInit(): void {
    console.log(this.audioUrl);
    this.playStream(this.audioUrl);
    this.pause();
  }
  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // console.log(events);
    });
  }

  pause() {
    this.audioService.pause();
  }
  play() {
    this.audioService.play();
  }
  stop() {
    this.audioService.stop();
  }
  mute() {
    this.audioService.mute();
  }
  unmute() {
    this.audioService.unmute();
  }
  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }
}