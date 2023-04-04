import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean > | Promise<boolean | UrlTree> | boolean | UrlTree {

        if(this.authService.isLogin()){
          return true
        }else {
          alert('You ar not authorized');
          this.router.navigate(['/register']);
          return false;
        }
     }
}

  

