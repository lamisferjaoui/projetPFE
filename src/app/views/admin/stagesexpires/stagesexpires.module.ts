import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagesexpiresRoutingModule } from './stagesexpires-routing.module';
import { StagesexpiresComponent } from './stagesexpires/stagesexpires.component';


@NgModule({
  declarations: [
    StagesexpiresComponent
  ],
  imports: [
    CommonModule,
    StagesexpiresRoutingModule
  ]
})
export class StagesexpiresModule { }
