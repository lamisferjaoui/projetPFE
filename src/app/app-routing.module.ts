import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { LoginadminComponent } from './views/admin/loginadmin/loginadmin/loginadmin.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';

const routes: Routes = [{path:'',component:FrontLayoutComponent,children:[
{path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
{ path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
{ path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule)},
]},

{path:'admin',component:AdminLayoutComponent,children:[
{path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
{path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
{path:'allstudents',loadChildren:()=>import('./views/admin/allstudents/allstudents.module').then(m=>m.AllstudentsModule)},
{path:'addstudent',loadChildren:()=>import('./views/admin/addstudent/addstudent.module').then(m=>m.AddstudentModule)},
{path:'loginadmin',loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)},
{path:'demandesacceptees',loadChildren:()=>import('./views/admin/demandesacceptees/demandesacceptees.module').then(m=>m.DemandesaccepteesModule)},
{path:'demandesrefusees',loadChildren:()=>import('./views/admin/demandesrefusees/demandesrefusees.module').then(m=>m.DemandesrefuseesModule)},
{path:'stagesexpires', loadChildren: ()=>import('./views/admin/stagesexpires/stagesexpires.module').then(m=>m.StagesexpiresModule)},



]},
{path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
