import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService  {
  private apiUrl = environment.apiUrl;
  

  constructor(private http:HttpClient) { 
  }

  getProduct(search?: string | null | undefined): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/products/search?q=${search}`);
  }
}