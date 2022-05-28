import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
<<<<<<< Updated upstream
    path:'',
=======
    path: '',
>>>>>>> Stashed changes
    component: DashboardComponent
  },
  {
    path: 'component1',
    loadChildren: () => import('./component1/component1.module').then(m => m.Component1Module)
  },
  {
    path: 'component2',
    loadChildren: () => import('./component2/component2.module').then(m => m.Component2Module)
  },
  {
    path: 'component3',
    loadChildren: () => import('./component3/component3.module').then(m => m.Component3Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
