import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page.component';
import { DeshbordComponent } from 'src/app/auth/deshbord/deshbord.component';

const routes: Routes = [
  {
    path: 'details/:id', component:DetailsPageComponent
  } ,
  
    {
      path: 'deshboard', component: DeshbordComponent
     }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
