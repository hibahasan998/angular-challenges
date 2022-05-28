import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1aComponent } from './page1a.component';

const routes: Routes = [
  {
    path: '',
    component: Page1aComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page1aRoutingModule { }
