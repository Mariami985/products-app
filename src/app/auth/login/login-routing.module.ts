import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthGuard } from '../service/auth.guard';
import { DeshbordComponent } from '../deshbord/deshbord.component';

const routes: Routes = [

  {
    path: '', component: LoginComponent,
  },
   {
    path: 'register', component: RegisterComponent,
   },
   {
    path: 'deshboard', component: DeshbordComponent,  canActivate:[AuthGuard]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }