import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailiesComponent } from './pages/dailies/dailies.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { ActiveDailyCardComponent } from './components/active-daily-card/active-daily-card.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { DailyCardComponent } from './components/daily-card/daily-card.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgendaRoutingModule } from './agenda-routing.module';

@NgModule({
  declarations: [
    DailiesComponent,
    TasksComponent,
    PlaygroundComponent,
    ActiveDailyCardComponent,
    BottomNavbarComponent,
    DailyCardComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgendaRoutingModule,
    ReactiveFormsModule
  ]
})
export class AgendaModule { }
