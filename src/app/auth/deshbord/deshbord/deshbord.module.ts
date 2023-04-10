import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeshbordRoutingModule } from './deshbord-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeshbordComponent } from '../deshbord.component';


@NgModule({
  declarations: [
    // DeshbordComponent,
  ],
  imports: [
    CommonModule,
    DeshbordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DeshbordModule { }
