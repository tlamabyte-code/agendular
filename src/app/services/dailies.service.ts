import { Injectable } from '@angular/core';
import { Daily, NewDaily } from '../models/daily.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DailiesService {
  private endpointURL = 'http://localhost:3000/api/v1/dailies';
  private secretKey = environment.secretKey;
  private secretProcessKey = process.env['SECRET_KEY'];

  private dailies = new BehaviorSubject<Daily[]>([]);

  dailies$ = this.dailies.asObservable();

  constructor(private http: HttpClient) {}

  getDailies() {
    return this.http.get<Daily[]>(this.endpointURL);
  }

  create(daily: NewDaily) {
    return this.http.post<NewDaily>(this.endpointURL, daily);
  }

  setDailies(dailies: Daily[]) {
    this.dailies.next(dailies);
  }

  getSecretKey() : string {
    return this.secretKey;
  }

  getSecretProcessKey(): string | undefined {
    return this.secretProcessKey;
  }
}
