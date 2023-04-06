import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  login(username:any, password:any) {
    return  this.http.post(`${this.apiUrl}/auth/login`, {
        username:username,
        password:password
    })
  }
  isLogin() {
    return !!localStorage.getItem('token')
  }
}
