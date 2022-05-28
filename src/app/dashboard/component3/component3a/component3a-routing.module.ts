import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component3aComponent } from './component3a.component';

const routes: Routes = [
  {
    path: '',
    component: Component3aComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Component3aRoutingModule { }
