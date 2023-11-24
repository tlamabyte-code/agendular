import { Injectable } from '@angular/core';
import { Daily } from '../models/daily.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailiesService {
  private myDailies: Daily[] = []

  constructor() { }

  getDailies() {
    return this.myDailies
  }

  addDaily(daily: Daily): void {
    this.myDailies.unshift(daily)
  }

}
