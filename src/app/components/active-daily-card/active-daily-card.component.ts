import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { Daily } from 'src/app/models/daily.model';
import { DailiesService } from 'src/app/services/dailies.service';
import { emotionsCollection } from 'src/utils/constants'

@Component({
  selector: 'app-active-daily-card',
  templateUrl: './active-daily-card.component.html',
  styleUrls: ['./active-daily-card.component.css']
})
export class ActiveDailyCardComponent implements OnInit {

  today: Date = new Date()
  formDaily!: FormGroup
  emotionsCollection = emotionsCollection

  todayDaily: Daily = {
    date: '',
    emotion: '',
    note: ''
  }

  @Output('nuevoDaily') savedDaily = new EventEmitter<Daily>()

  constructor(private formBuilder: FormBuilder, private dailiesService: DailiesService) {
    this.buildForm()
  }

  ngOnInit(): void {
      // this.noteField!.valueChanges.subscribe((value) => {
      //   console.log(value)
      // })
  }

  private buildForm() {
    this.formDaily = this.formBuilder.group({
      emotion: ['', [Validators.required]],
      note: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(150)]],
      date: [this.today.toString()]
    })
  }

  get noteField() {
    return this.formDaily.get('note')
  }

  get emotionField() {
    return this.formDaily.get('emotion')
  }

  get dateField() {
    return this.formDaily.get("date")
  }

  checkEmotion(): boolean {
    return this.emotionField?.value === ''
  }

  changeEmotion() {
    this.emotionField?.setValue('')
  }

  saveDaily() {

    if (this.todayDaily.date === this.today.toString()) {
      alert("Ya subiste Daily")
    } else {
      this.savedDaily.emit(this.formDaily.value as Daily)
    }

  }

}
