import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

// api-თან სამუშაო სერვისი

@Injectable({
  providedIn: 'root'
})
export class  ProductsService{
  
  // call api

  private apiUrl = environment.apiUrl;  

  constructor( private http:HttpClient) { }

  //  get all product list ჯერ არ ვიყინებე პროსტა იყოს

  getProductList(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/products`)
  }

  //  search form

  getProductsSearch(search:any) : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/products/search?q=${search}`)
  }
  

  //  go to detail page with id

  getdetailProdact(id:string): Observable<any>{
  return this.http.get<any>(`${this.apiUrl}/products/${id}`)
  }

  // dropdow 

  getCategory():Observable<any>{
  return this.http.get<any>(`${this.apiUrl}/products/categories`)
   
  }
}
