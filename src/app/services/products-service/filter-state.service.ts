import { Observable, map, of, tap, switchMap } from 'rxjs';

import {  Injectable, } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductsStateService } from './Products-state.service';

@Injectable({
  providedIn: 'root'
})

export class FilterStateService {
  
  productsList$:Observable<any[]> =this.productStateService.getProducts()
  loading$:Observable<boolean> = this.productStateService.getLoading();
  searchValue$:Observable<any> = this.productStateService.getSearchValue();

  constructor( private productsService: ProductsService,
    private productStateService:ProductsStateService
    ) { }

    fetchProducts(){
      this.productStateService.setLoading(true);
      this.productStateService.getCategoryValue().subscribe((res:any) =>{
        this.searchValue$ = res
        this.productStateService.setLoading(false)
        if(res === 'Choose category'){
          this.searchValue$ = of('')
        }else {
          this.searchValue$ = of(res)
        }
      this.productsList$ = this.searchValue$.pipe(
        switchMap((value: string) => this.productsService.getProductsSearch(value)),
        map((res: any) => res.products),
        tap((products: any) => {
          products.forEach((a: any) => {
            Object.assign(a, {quantity:1, total: a.price });
          });
        })
      );
    })
  } 
  }
