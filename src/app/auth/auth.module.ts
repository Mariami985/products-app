import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeshbordComponent } from './deshbord/deshbord.component';
import { LoginComponent } from './login/login/login.component';


@NgModule({
  declarations: [
    // LoginComponent,
    // RegisterComponent,
    // DeshbordComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
