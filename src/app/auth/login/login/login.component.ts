import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  //   username: 'kminchelle',
  //   password: '0lelplR',


loginForm: FormGroup | any


  constructor(private serviceLogin: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userDetails' : new FormGroup({
          'username': new FormControl("kminchelle", [Validators.required]),
          'password': new FormControl("0lelplR", [Validators.required])
      })
    })
  }

onSubmit(){
    this.serviceLogin.login(this.loginForm.value.userDetails.username, this.loginForm.value.userDetails.password).subscribe((res) => {
      console.log('login', res)
      if(this.loginForm.valid){
          localStorage.setItem('token', JSON.stringify(res));
          this.router.navigate(['/deshbord'])
      }else  {
        this.router.navigate([''])
// ! არ მუშაობს else
      }
    }
  )
    
}



}