import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandesaccepteesRoutingModule } from './demandesacceptees-routing.module';
import { DemandesaccepteesComponent } from './demandesacceptees/demandesacceptees.component';


@NgModule({
  declarations: [
    DemandesaccepteesComponent
  ],
  imports: [
    CommonModule,
    DemandesaccepteesRoutingModule
  ]
})
export class DemandesaccepteesModule { }
