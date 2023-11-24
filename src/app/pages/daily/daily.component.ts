import { Component, OnInit } from '@angular/core';
import { Daily } from 'src/app/models/daily.model';
import { DailiesService } from 'src/app/services/dailies.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  myDailies: Daily[] = []

  constructor(private dailiesService: DailiesService) {

  }

  ngOnInit(): void {
      this.dailiesService.getDailies()
      .subscribe(data => {
        this.dailiesService.setDailies(data)
      })

      this.dailiesService.dailies$.subscribe(dailies =>
        this.myDailies = dailies
      )
  }

  handlerCompletedDaily(daily: Daily): void {
    this.dailiesService.addDaily(daily)
  }
}
