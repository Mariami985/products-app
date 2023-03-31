import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {

  
  loginObj:any = {
    username: 'kminchelle',
    password: '0lelplR',
  }

  constructor(private serviceLogin: AuthService,private router: Router, private route: ActivatedRoute) {}
  onLogin(){
    this.serviceLogin.onLogin(this.loginObj).subscribe((res:any) => {
        console.log('res', res)
        localStorage.setItem('token', res.token)

        if(this. loginObj.invalid){
          
          alert('Oops, something heppend wrong! Please check!')
         }else{
           alert('Thank you!')
         }
    })
  }

}
