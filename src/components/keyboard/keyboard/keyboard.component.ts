import { Component } from '@angular/core';
import { KeyComponent } from '../key/key.component';
import { ToneService } from '../../../app/services/tone.service';

import * as Tone from "tone";

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [KeyComponent],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss',
  providers: [ToneService]
})
export class KeyboardComponent {
  synth: any;
  constructor(private toneService: ToneService) {
  }

  
  playTone(note: string) {
    this.toneService.playTone(note);
  }

  stopTone() {
    this.toneService.stopTone()
  }
}
