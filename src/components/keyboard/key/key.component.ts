import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-key',
  standalone: true,
  imports: [],
  templateUrl: './key.component.html',
  styleUrl: './key.component.scss',
})
export class KeyComponent {
  @Input() note: string = "";
  @Output() toneStart: EventEmitter<string> = new EventEmitter<string>();
  @Output() toneStop: EventEmitter<null> = new EventEmitter<null>();

  constructor() {

  }

  playTone() {
    this.toneStart.emit(this.note);
  }

  stopTone() {
    this.toneStop.emit();
  }
}
