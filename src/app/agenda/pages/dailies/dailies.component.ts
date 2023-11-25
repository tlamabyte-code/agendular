import { Component, OnInit } from '@angular/core';
import { Daily } from 'src/app/models/daily.model';
import { DailiesService } from 'src/app/services/dailies.service';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.css']
})
export class DailiesComponent implements OnInit {
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
