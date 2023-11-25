import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundRouteComponent } from './notfound-route/notfound-route.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule)
  },
  {
    // Not found **
    path: "**",
    component: NotFoundRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
