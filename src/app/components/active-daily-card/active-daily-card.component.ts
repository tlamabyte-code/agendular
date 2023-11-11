import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { Daily } from 'src/app/models/daily.model';
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

  @Output('nuevoDaily') savedDaily = new EventEmitter<Daily>()

  constructor(private formBuilder: FormBuilder) {
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
      note: ['', [Validators.required, Validators.minLength(45), Validators.maxLength(85)]],
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
    this.savedDaily.emit(this.formDaily.value as Daily)
  }


}
