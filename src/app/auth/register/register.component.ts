import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  FormGroup:any
  myForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    tel: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
    });
  }
  onSubmit(form: FormGroup) {
    // console.log('Valid?', form.valid); 
    if(this.myForm.invalid){
     alert('Oops, something heppend wrong! Please check!')
    }else{
      alert('Thank you!')
      this.router.navigate(['/deshbord'])
    }
    
  }

}
