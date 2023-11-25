import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyComponent } from './pages/dailies/dailies.component';
import { ActiveDailyCardComponent } from './components/active-daily-card/active-daily-card.component';
import { DailyCardComponent } from './components/daily-card/daily-card.component';
import { CalculoHorasPipe } from './pipes/calculo-horas.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DailyComponent,
    ActiveDailyCardComponent,
    DailyCardComponent,
    CalculoHorasPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
