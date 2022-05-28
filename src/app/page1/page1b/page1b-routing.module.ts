import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1bComponent } from './page1b.component';

const routes: Routes = [
  {   
    path: '',
    component: Page1bComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page1bRoutingModule { }
