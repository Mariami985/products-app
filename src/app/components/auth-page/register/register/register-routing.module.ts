import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../register.component';

import { isRegister } from 'src/app/guards/register.guard';
import { ListComponent } from 'src/app/components/product-page/list/list.component';

const routes: Routes = [
  {
    path: '', component: RegisterComponent
  },
  {
    path:'list', component:ListComponent,
    canActivate: [isRegister]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
