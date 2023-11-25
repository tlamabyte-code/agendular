import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  activityName: string | null = null

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.activityName = params.get("activity")
      })
  }


}
