import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2.component';

const routes: Routes = [
  {
    path: '',
    component: Page2Component
  },
  {
    path: 'page2a',
    loadChildren: () => import('./page2a/page2a.module').then(m => m.Page2aModule)
  },
  {
    path: 'page2b',
    loadChildren: () => import('./page2b/page2b.module').then(m => m.Page2bModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2RoutingModule { }
