import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddstudentRoutingModule } from './addstudent-routing.module';
import { AddstudentComponent } from './addstudent.component';


@NgModule({
  declarations: [
    AddstudentComponent
  ],
  imports: [
    CommonModule,
    AddstudentRoutingModule
  ]
})
export class AddstudentModule { }
