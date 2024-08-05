import { Component } from '@angular/core';
import { KeyComponent } from '../key/key.component';
import { ToneService } from '../../../app/services/tone.service';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [KeyComponent],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss',
  providers: [ToneService]
})
export class KeyboardComponent {
  constructor(private toneService: ToneService) {

  }

  initSynth() {
    this.toneService.setUpTone();
  }
  
  playTone(note: string) {
    this.toneService.playTone(note);
  }

  stopTone() {
    this.toneService.stopTone()
  }
}
