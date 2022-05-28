import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component3bComponent } from './component3b.component';

const routes: Routes = [
  {
    path: '',
    component: Component3bComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Component3bRoutingModule { }
