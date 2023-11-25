import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyComponent } from './pages/dailies/dailies.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dailies',
    pathMatch: 'full'
  },
  {
    path: 'dailies',
    component: DailyComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'playground',
    component: PlaygroundComponent
  },
  {
    path: 'playground/:activity',
    component: PlaygroundComponent
  },
  {
    // Not found
    path: '**',
    component: NotFoundRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
