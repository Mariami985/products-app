import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

// api service

@Injectable({
  providedIn: 'root'
})
export class  ProductsService{
  
  // call api

  private apiUrl = environment.apiUrl;  
 
  constructor( private http:HttpClient) { }

  //  search form and whole products list

  getProductsSearch(search:string = '') : Observable<any>{
    return this.http.get<any>(search ? `${this.apiUrl}/products/category/${search}` : `${this.apiUrl}/products?limit=6`);
  }
  

  // category

  getCategory():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/products/categories`)
  }

  //  go to detail page with id

  getdetailProdact(id:any): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/products/${id}`)
    }
}
