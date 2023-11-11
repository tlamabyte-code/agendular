import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyComponent } from './pages/daily/daily.component';
import { PendingComponent } from './pages/pending/pending.component';
import { QuotesComponent } from './pages/quotes/quotes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'daily',
    pathMatch: 'full'
  },
  {
    path: 'daily',
    component: DailyComponent
  },
  {
    path: 'pending',
    component: PendingComponent
  },
  {
    path: 'quotes',
    component: QuotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
