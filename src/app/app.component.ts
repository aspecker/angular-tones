import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { KeyboardComponent } from '../components/keyboard/keyboard/keyboard.component';
import { ToneService } from './services/tone.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KeyboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ToneService]
})

export class AppComponent implements OnInit {

  constructor(private toneService: ToneService) {

  }

  ngOnInit(): void {
    this.toneService.setUpTone();
    console.log(this.toneService.ToneInstance)

  }
}
