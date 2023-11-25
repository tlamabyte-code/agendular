import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private clock$: Observable<Date>

  constructor() {
    this.clock$ = interval(1000).pipe(
      map(() => new Date())
    )
  }

  getClock(): Observable<Date> {
    return this.clock$
  }

}
