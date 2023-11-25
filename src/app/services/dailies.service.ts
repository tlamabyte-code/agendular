import { Injectable } from '@angular/core';
import { Daily, NewDaily } from '../models/daily.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DailiesService {
  private endpointURL = "http://localhost:3000/api/v1/dailies"

  private dailies = new BehaviorSubject<Daily[]>([])

  dailies$ = this.dailies.asObservable()

  constructor(private http: HttpClient) { }

  getDailies() {
    return this.http.get<Daily[]>(this.endpointURL)
  }

  create(daily: NewDaily) {
    return this.http.post<NewDaily>(this.endpointURL, daily)
  }

  setDailies(dailies: Daily[]) {
    this.dailies.next(dailies)
  }

}
