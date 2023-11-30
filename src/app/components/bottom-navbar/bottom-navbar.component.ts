import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent implements OnInit {

  clockNow = new Date()
  appVersion = environment.app_version


  constructor(private clockService: ClockService) {

  }

  ngOnInit(): void {
    this.clockService.getClock().subscribe((clockNow) => {
      this.clockNow = clockNow
    })
  }

}
