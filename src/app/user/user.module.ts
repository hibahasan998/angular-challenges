import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PlansComponent } from './plans/plans.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule {

 }
