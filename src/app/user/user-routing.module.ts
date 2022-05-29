import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path:'',
    component: UserComponent
  },
  {
    path: ':id/plans',
    loadChildren: () => import('./plans/plans.module').then(m => m.PlansModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
