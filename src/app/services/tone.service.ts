import { Injectable } from '@angular/core';
import * as Tone from "tone";


@Injectable({
  providedIn: 'root'
})
export class ToneService {
  synth: any;
  ToneInstance: any;

  constructor() { }

  setUpTone() {
    this.ToneInstance = Tone;
    this.synth = new Tone.Synth().toDestination();
  }

  playTone(note: string) {
    if (this.synth === undefined) {
        this.setUpTone();
    }
    this.synth.triggerAttack(note);
  }

  stopTone() {
    
    this.synth.triggerRelease();
  }
}
