import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component3Component } from './component3.component';

const routes: Routes = [
  {
    path:'',
    component: Component3Component
  },
  {
    path: 'component3a',
    loadChildren: () => import('./component3a/component3a.module').then(m => m.Component3aModule)
  },
  {
    path: 'component3b',
    loadChildren: () => import('./component3b/component3b.module').then(m => m.Component3bModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Component3RoutingModule { }
