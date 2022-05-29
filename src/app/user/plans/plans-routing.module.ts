import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './plans.component';

const routes: Routes = [
  {
    path: '',
    component: PlansComponent
  },
  {
    path: ':id/todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
