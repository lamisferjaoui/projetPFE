import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagesexpiresComponent } from './stagesexpires/stagesexpires.component';

const routes: Routes = [
  {path:'',component:StagesexpiresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagesexpiresRoutingModule { }
