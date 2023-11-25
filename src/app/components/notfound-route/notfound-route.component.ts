import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notfound-route',
  templateUrl: './notfound-route.component.html',
  styleUrls: ['./notfound-route.component.css'],
})
export class NotfoundRouteComponent implements OnInit {
  currentPath = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.url)
    this.currentPath = `/${this.route.snapshot.url.map(segment => segment.path).join('/')}`
  }
}
