// რეგისტრაციის საკონტროლო გარდი

import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { RegisterService } from '../services/auth-service/register.service';

  export const isRegister: CanActivateFn =() => {
    const registerService = inject(RegisterService)
    
    if(registerService.isRegister()){
        return true
      } 
        return false
 }




