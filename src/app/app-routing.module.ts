import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, } from '@angular/router';

import { isAuthenticated } from './guards/login.guard';
import { HomeComponent } from './components/product-page/home/home.component';
import { LoginComponent } from './components/auth-page/login/login.component';
import { RegisterComponent } from './components/auth-page/register/register.component';
import { CartComponent } from './components/product-page/cart/cart.component';
import { DetailComponent } from './components/product-page/detail/detail.component';
import { ListComponent } from './components/product-page/list/list.component';
import { ErrorComponent } from './layout/error/error.component';



const routes: Routes = [
  {
    path:'', redirectTo:"home",pathMatch: 'full',
  },
  {
    path: 'home', component: HomeComponent, pathMatch: 'full',
    data: {hideHeader:true, showFooter:true}
  },
  {
    path: '', 
    canActivate:[isAuthenticated],
    children: [
      {
        path: 'list', pathMatch: 'full',
        loadChildren: () => import('./components/product-page/list/list/list.module').then(item => item.ListModule),
        
      }, 
      {
        path: 'details/:id',pathMatch:'full',
        loadChildren: () => import('./components/product-page/detail/detail/detail.module').then(item => item.DetailModule),
      
      }, 
      {
        path: 'cart', pathMatch: 'full',
        loadChildren: () => import('./components/product-page/cart/cart/cart.module').then(item => item.CartModule),
        
      }, 
    ]
  },
 
  
  {
    path: 'login',  pathMatch: 'full',
    data: {hideHeader:true, showFooter:true},
    loadChildren: () => import ('./components/auth-page/login/login/login.module').then(item => item.LoginModule)
  }, 
  {
    path: 'register', pathMatch: 'full',
    data: {hideHeader:true, showFooter:true},
    loadChildren: () => import('./components/auth-page/register/register/register.module').then(item => item.RegisterModule)
  },
  {
    path: '**', pathMatch: 'full',
    data: {hideHeader:true, showFooter:true},
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, LoginComponent, RegisterComponent, ListComponent, DetailComponent, CartComponent,]
