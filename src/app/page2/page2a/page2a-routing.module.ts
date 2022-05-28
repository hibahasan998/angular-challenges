import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2aComponent } from './page2a.component';

const routes: Routes = [
  {   
    path: '',
    component: Page2aComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2aRoutingModule { }
