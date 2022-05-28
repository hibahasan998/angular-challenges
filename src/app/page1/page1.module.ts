import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1aComponent } from './page1a/page1a.component';
import { Page1bComponent } from './page1b/page1b.component';


@NgModule({
  declarations: [
    Page1aComponent,
    Page1bComponent
  ],
  imports: [
    CommonModule,
    Page1RoutingModule
  ]
})
export class Page1Module { }
