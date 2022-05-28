import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2aComponent } from './page2a/page2a.component';
import { Page2bComponent } from './page2b/page2b.component';


@NgModule({
  declarations: [
    Page2aComponent,
    Page2bComponent
  ],
  imports: [
    CommonModule,
    Page2RoutingModule
  ]
})
export class Page2Module { }
