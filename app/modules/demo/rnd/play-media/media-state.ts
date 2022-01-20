export interface MediaState {
  playing: boolean,
  readableCurrentTime:string,
  readableDuration: string,
  duration: number,
  currentTime: number,
  canplay: boolean,
  error: boolean,
  mute: boolean,
}