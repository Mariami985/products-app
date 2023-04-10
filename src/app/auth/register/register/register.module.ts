import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from 'src/app/components/cart/cart.component';


@NgModule({
  declarations: [
    
  ],

  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class RegisterModule { }
