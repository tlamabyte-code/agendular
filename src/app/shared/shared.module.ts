import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculoHorasPipe } from './pipes/calculo-horas.pipe';
import { ShortNotePipe } from './pipes/short-note.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TimestampToDatePipe } from './pipes/timestamp-to-date.pipe';

@NgModule({
  declarations: [
    CalculoHorasPipe,
    ShortNotePipe,
    HighlightDirective,
    TimestampToDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculoHorasPipe,
    ShortNotePipe,
    HighlightDirective,
    TimestampToDatePipe
  ]
})
export class SharedModule { }
