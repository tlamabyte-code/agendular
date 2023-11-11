import { Component } from '@angular/core';
import { Daily } from 'src/app/models/daily.model';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent {
  myDailies: Daily[] = []

  handlerCompletedDaily(daily: Daily): void {

    console.log('reporte hijo')
    this.myDailies.unshift(daily)
  }
}
