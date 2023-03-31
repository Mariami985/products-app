import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingupRoutingModule } from './singup-routing.module';
import { SingupComponent } from './singup/singup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SingupComponent
  ],
  imports: [
    CommonModule,
    SingupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SingupModule { }
