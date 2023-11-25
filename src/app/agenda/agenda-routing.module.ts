import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DailiesComponent } from './pages/dailies/dailies.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { PlaygroundComponent } from './pages/playground/playground.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dailies',
        pathMatch: 'full'
      },
      {
        path: 'dailies',
        component: DailiesComponent
      },
      {
        path: 'tasks',
        component: TasksComponent
      },
      {
        path: 'playground',
        component: PlaygroundComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
