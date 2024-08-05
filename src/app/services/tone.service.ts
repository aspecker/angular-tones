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
    this.synth = new this.ToneInstance.Synth().toDestination();
  }
}
