import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm: FormGroup | any

  constructor(private fb: FormBuilder, 
                    private router: Router,
                    private route: ActivatedRoute,
                    private registerService:RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      id: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', Validators.required],
      password: ['', [Validators.required]]
      })
  }
  onSubmit() {
    
      this.registerService.register(this.registerForm.value.firstName,
                                                this.registerForm.value.lastName,
                                                this.registerForm.value.age,
                                                this.registerForm.value.id,
                                                this.registerForm.value.email,
                                                this.registerForm.value.tel,
                                                this.registerForm.value.password,)
      .subscribe((res) => {
        if(this.registerForm.valid){
          localStorage.setItem('token', JSON.stringify(res));
          this.router.navigate(['/products'])
        }
      })
    
  }
}
