import { Injectable } from '@angular/core';
import { Daily } from '../models/daily.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailiesService {
  private myDailies: Daily[] = [
    {
      emotion: '😁',
      note: 'Hola Mundo, es un buen día porque es viernes 👍',
      date: '10/11/2023',
    },
    {
      emotion: '😁',
      note: 'Hola Mundo, es un buen día porque es jueves 👍',
      date: '09/11/2023',
    }
  ]

  // Retiene la data "reactiva": BehaviorSubject
  private todayDaily = new BehaviorSubject<Daily>({
    date: '',
    note: '',
    emotion: ''
  })

  // Observable
  todayDaily$ = this.todayDaily.asObservable()

  constructor() { }

  getDailies() {
    return this.myDailies
  }

  addDaily(daily: Daily): void {
    this.myDailies.unshift(daily)

    // Modificación del BehaviorSubject (todayDaily)
    this.todayDaily.next(daily)
  }

}
