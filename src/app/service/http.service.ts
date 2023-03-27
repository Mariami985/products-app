import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getProdact(): Observable<any>{
    return this.http.get<any>(this.apiUrl + '/products?limit=6')
    .pipe(map((response:any) => {
       return response;
    }))
  }
}
