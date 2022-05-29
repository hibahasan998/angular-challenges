import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { TodoComponent } from './todo/todo.component';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    MaterialModule
  ]
})
export class PlansModule { }
