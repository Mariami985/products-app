import { AuthModule } from './auth/auth.module';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {  
    
    path: '', redirectTo:'home', pathMatch:'full',
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'products', component: ProductsComponent,
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/auth.module').then(item=> item.AuthModule)
  },
  {
    path: 'singup',
    loadChildren: () => import('./singup/singup.module').then(item=> item.SingupModule)
  },





  // { path: 'protected-route', component: ProtectedComponent, canActivate: [AuthGuard] }
  // { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
