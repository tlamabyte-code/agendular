import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found-route',
  templateUrl: './not-found-route.component.html',
  styleUrls: ['./not-found-route.component.css']
})
export class NotFoundRouteComponent implements OnInit {
  currentPath = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      console.log(this.route.snapshot.url)
      this.currentPath = `/${this.route.snapshot.url.map(segment => segment.path).join('/')}`
  }

}
