import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyComponent } from './pages/daily/daily.component';
import { ActiveDailyCardComponent } from './components/active-daily-card/active-daily-card.component';
import { DailyCardComponent } from './components/daily-card/daily-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyComponent,
    ActiveDailyCardComponent,
    DailyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
