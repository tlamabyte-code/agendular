import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  MinLengthValidator,
} from '@angular/forms';
import { Daily } from 'src/app/models/daily.model';
import { ClockService } from 'src/app/services/clock.service';
import { DailiesService } from 'src/app/services/dailies.service';
import { emotionsCollection } from 'src/utils/constants';

@Component({
  selector: 'app-active-daily-card',
  templateUrl: './active-daily-card.component.html',
  styleUrls: ['./active-daily-card.component.css'],
})
export class ActiveDailyCardComponent implements OnInit {
  clockNow = new Date();
  formDaily!: FormGroup;
  emotionsCollection = emotionsCollection;
  isLight: boolean = false;

  @Output('nuevoDaily') savedDaily = new EventEmitter<Daily>();

  constructor(
    private formBuilder: FormBuilder,
    private dailiesService: DailiesService,
    private clockService: ClockService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.colorField!.valueChanges.subscribe((value) => {
      this.isColorLight(value);
    });

    this.clockService.getClock().subscribe((clockNow: Date) => {
      this.clockNow = clockNow
    })
  }

  private buildForm() {
    this.formDaily = this.formBuilder.group({
      emotion: ['', [Validators.required]],
      note: [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(85),
        ],
      ],
      color: ['#03331f'],
    });
  }

  get noteField() {
    return this.formDaily.get('note');
  }

  get emotionField() {
    return this.formDaily.get('emotion');
  }

  get colorField() {
    return this.formDaily.get('color');
  }

  get dateField() {
    return this.formDaily.get('date');
  }

  private isColorLight(color: string): void {
    // Convert hexadecimal color to RGB
    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    };

    // Calculate luminance

    const rgb = hexToRgb(color);
    const luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;

    // Checar si el color es muy claro
    if (luminance > 30) {
      const darkerR = Math.max(0, Math.round(rgb.r * (1 - 0.1)));
      const darkerG = Math.max(0, Math.round(rgb.g * (1 - 0.1)));
      const darkerB = Math.max(0, Math.round(rgb.b * (1 - 0.1)));

      this.colorField?.setValue(`#${(1 << 24 | darkerR << 16 | darkerG << 8 | darkerB).toString(16).slice(1)}`)
    }
  }

  checkEmotion(): boolean {
    return this.emotionField?.value === '';
  }

  changeEmotion() {
    this.emotionField?.setValue('');
  }

  saveDaily() {
    this.savedDaily.emit(this.formDaily.value as Daily)
  }
}
