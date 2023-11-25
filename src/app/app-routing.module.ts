import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyComponent } from './pages/dailies/dailies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dailies',
    pathMatch: 'full'
  },
  {
    path: 'dailies',
    component: DailyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
