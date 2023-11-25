import { Injectable } from '@angular/core';
import { Daily } from '../models/daily.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailiesService {
  // private myDailies: Daily[] = []
  private dailies = new BehaviorSubject<Daily[]>([])

  // Observables
  dailies$ = this.dailies.asObservable()

  constructor(private http: HttpClient) { }

  getDailies() {
    return this.http.get<Daily[]>('http://localhost:3000/api/v1/dailies')
  }

  addDaily(daily: Daily): void {
    const dailiesValue = this.dailies.getValue()

    dailiesValue.unshift(daily)

    this.dailies.next(dailiesValue)
    // Modificación del BehaviorSubject (todayDaily)
  }

  setDailies(dailies: Daily[]) {
    this.dailies.next(dailies)
  }

}
