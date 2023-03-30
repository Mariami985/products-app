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

  getProdact(search?:string | null | undefined): Observable<any>{
    return this.http.get<any>(this.apiUrl + '/products?limit=6')
   
  }

  // getApi(search?:string | null | undefined){
  //   return this.http.get<any>('https://dummyjson.com/products/search?q=phone')
  // }
}