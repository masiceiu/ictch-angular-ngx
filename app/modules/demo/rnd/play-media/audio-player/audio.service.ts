import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor() {}

  private stop$ = new Subject();
  private audioObject: HTMLAudioElement = new Audio();

  private audioEvents: Array<string> = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart',
  ];
  private state: MediaState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
    mute: false,
  };
  private streamObservable(url) {
    return new Observable(observer => {
      // Play audio
      this.audioObject.src = url;
      this.audioObject.load();
      this.audioObject.play();

      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };
      this.addEvents(this.audioObject, this.audioEvents, handler);
      return () => {
        this.audioObject.pause();
        this.audioObject.currentTime = 0;

        this.removeEvent(this.audioObject, this.audioEvents, handler);
        this.resetState();
      };
    });
  }
  private addEvents(obj, events, handler) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvent(obj, events, handler) {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  playStream(url) {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  play() {
    this.audioObject.play();
  }
  pause() {
    this.audioObject.pause();
  }
  stop() {
    this.stop$.next();
  }
  mute() {
    this.audioObject.volume = 0;
    this.state.mute = true;
  }
  unmute() {
    this.audioObject.volume = 1;
    this.state.mute = false;
  }
  seekTo(seconds) {
    this.audioObject.currentTime = seconds;
  }

  formatTime(time: number, format: string = 'mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  private stateChange: BehaviorSubject<MediaState> = new BehaviorSubject(this.state);

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case 'canplay':
        this.state.duration = this.audioObject.duration;
        this.state.readableDuration = this.formatTime(this.state.duration);
        this.state.canplay = true;
        break;

      case 'playing':
        this.state.playing = true;
        break;

      case 'pause':
        this.state.playing = false;
        break;

      case 'timeupdate':
        this.state.currentTime = this.audioObject.currentTime;
        this.state.readableCurrentTime = this.formatTime(this.state.currentTime);
        break;

      case 'error':
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

  private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false,
      mute: false,
    };
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }

}
