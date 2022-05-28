import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2bComponent } from './page2b.component';

const routes: Routes = [
  {   
    path: '',
    component: Page2bComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2bRoutingModule { }
