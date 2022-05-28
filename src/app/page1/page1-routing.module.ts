import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1.component';

const routes: Routes = [
  {
    path: '',
    component: Page1Component
  },
  {
    path: 'page1a',
    loadChildren: () => import('./page1a/page1a.module').then(m => m.Page1aModule)
  },
  {
    path: 'page1b',
    loadChildren: () => import('./page1b/page1b.module').then(m => m.Page1bModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page1RoutingModule { }
