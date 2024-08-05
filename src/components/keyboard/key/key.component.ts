import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-key',
  standalone: true,
  imports: [],
  templateUrl: './key.component.html',
  styleUrl: './key.component.scss',
})
export class KeyComponent {
  @Input() synth: any;
  @Output() toneStart: EventEmitter<string> = new EventEmitter<string>();
  @Output() toneStop: EventEmitter<null> = new EventEmitter<null>();

  constructor() {

  }

  playTone(note: string) {
    this.toneStart.emit(note);
  }

  stopTone() {
    this.toneStop.emit();
  }
}
