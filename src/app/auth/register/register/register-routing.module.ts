import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../register.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { RegisterGuard } from '../../service/register.guard';

const routes: Routes = [

  { 
    path: '', component: RegisterComponent
  },
  {
    path: 'products', component:CartComponent,  canActivate:[RegisterGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
