import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandesrefuseesRoutingModule } from './demandesrefusees-routing.module';
import { DemandesrefuseesComponent } from './demandesrefusees/demandesrefusees.component';


@NgModule({
  declarations: [
    DemandesrefuseesComponent
  ],
  imports: [
    CommonModule,
    DemandesrefuseesRoutingModule
  ]
})
export class DemandesrefuseesModule { }
