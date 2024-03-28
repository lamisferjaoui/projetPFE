import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandesrefuseesComponent } from './demandesrefusees/demandesrefusees.component';

const routes: Routes = [
  {path:'',component:DemandesrefuseesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandesrefuseesRoutingModule { }
