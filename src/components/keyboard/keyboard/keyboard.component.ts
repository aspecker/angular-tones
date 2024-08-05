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
  constructor(private toneService: ToneService) {}
  
  playTone(note: string) {
    this.toneService.synth.triggerAttack(note)
  }

  stopTone(note: string) {
    this.toneService.synth.triggerRelease()
  }
}
