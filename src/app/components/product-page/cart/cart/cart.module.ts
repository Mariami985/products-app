import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from '../cart.component';
import { MainCartComponent } from 'src/app/components/components/main-cart/main-cart.component';



@NgModule({
  declarations: [
    CartComponent,
    MainCartComponent,
    

  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
