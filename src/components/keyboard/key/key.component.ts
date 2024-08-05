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
  @Output() emitToneStart: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitToneStop: EventEmitter<null> = new EventEmitter<null>();

  constructor() {

  }

  playTone(note: string) {
    this.emitToneStart.emit(note);
  }

  stopTone() {
    this.emitToneStop.emit();
  }
}
