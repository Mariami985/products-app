import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginObj:any = {
    username: 'kminchelle',
    password: '0lelplR',
  }

    constructor(private serviceLogin: AuthService,private router: Router, private route: ActivatedRoute) {}


    ngOnInit() {
      // console.log('Current URL:', this.router.url);
    
      // Get route parameters
      // this.route.params.subscribe(params => {
      //   console.log('Route parameters:', params);
      // });
    
      // Get query parameters
    //   this.route.queryParams.subscribe(queryParams => {
    //     console.log('Query parameters:', queryParams);
    //   });
    }
    
    onLogin(){
      this.serviceLogin.onLogin(this.loginObj).subscribe((res:any) => {
          console.log('res', res)
          localStorage.setItem('token', res.token)
      })
    }
  }

