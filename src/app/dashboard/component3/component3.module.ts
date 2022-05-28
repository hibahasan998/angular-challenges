import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component3RoutingModule } from './component3-routing.module';
import { Component3aComponent } from './component3a/component3a.component';
import { Component3bComponent } from './component3b/component3b.component';


@NgModule({
  declarations: [
    Component3aComponent,
    Component3bComponent
  ],
  imports: [
    CommonModule,
    Component3RoutingModule
  ]
})
export class Component3Module { }
