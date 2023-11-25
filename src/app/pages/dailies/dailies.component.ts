import { Component } from '@angular/core';
import { Daily } from 'src/app/models/daily.model';
import { DailiesService } from 'src/app/services/dailies.service';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.css']
})
export class DailyComponent {
  myDailies: Daily[] = []

  constructor(private dailiesService: DailiesService) {
    this.myDailies = this.dailiesService.getDailies()
  }

  handlerCompletedDaily(daily: Daily): void {
    this.dailiesService.addDaily(daily)
  }
}
