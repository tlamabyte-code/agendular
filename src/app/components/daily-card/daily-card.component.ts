import { Component, Input } from '@angular/core';
import { Daily } from 'src/app/models/daily.model';

@Component({
  selector: 'app-daily-card',
  templateUrl: './daily-card.component.html',
  styleUrls: ['./daily-card.component.css']
})
export class DailyCardComponent {
  @Input('estatusDelDia') daily: Daily = {
    id: 0,
    emotion: '',
    note: '',
    color: '',
    timestamp: (new Date().getTime()/1000)
  }
}
