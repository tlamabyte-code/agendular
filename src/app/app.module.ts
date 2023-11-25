import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailiesComponent } from './pages/dailies/dailies.component';
import { ActiveDailyCardComponent } from './components/active-daily-card/active-daily-card.component';
import { DailyCardComponent } from './components/daily-card/daily-card.component';
import { CalculoHorasPipe } from './pipes/calculo-horas.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TimestampToDatePipe } from './pipes/timestamp-to-date.pipe';
import { ShortNotePipe } from './pipes/short-note.pipe';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { NotfoundRouteComponent } from './components/notfound-route/notfound-route.component';

@NgModule({
  declarations: [
    AppComponent,
    DailiesComponent,
    ActiveDailyCardComponent,
    DailyCardComponent,
    CalculoHorasPipe,
    HighlightDirective,
    TimestampToDatePipe,
    ShortNotePipe,
    BottomNavbarComponent,
    TasksComponent,
    PlaygroundComponent,
    NotfoundRouteComponent
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
