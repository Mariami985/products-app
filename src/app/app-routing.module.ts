import { DetailsPageComponent } from './components/details-page/details-page.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './auth/service/auth.guard';

const routes: Routes = [

  {  
    
    path: '', redirectTo:'home', pathMatch:'full',
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'products',
    canActivate:[AuthGuard],
    component: CartComponent,
  },
  {
    path: 'details/:id',
    component:DetailsPageComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register/register.module').then(item=> item.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(item=> item.LoginModule)
  },
  {
    path: 'deshbord',
    canActivate:[AuthGuard],
    loadChildren: () => import('./auth/deshbord/deshbord/deshbord.module').then(item=> item.DeshbordModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
