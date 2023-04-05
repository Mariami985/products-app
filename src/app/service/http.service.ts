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

//  get all product list

  getProductList(search?: string | null | undefined): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/products`)
  }

  //  with rxjs search form

  getProcucts(search?: string | null | undefined) : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/products/search?q=${search}`);
  }

//  go to detail page with id
  getdetailProdact(id:string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/products/${id}`)
  }
}