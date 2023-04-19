import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductsService } from './products.service';
import { ProductsStateService } from './Products-state.service';

@Injectable({
  providedIn: 'root'
})

// აზრი არ აქვს 
export class FilterStateService {
 
  loading$ = this.productStateService.getLoading();
  searchValue$ = this.productStateService.getSearchValue();
  productList : any = [];


  constructor( private productsService: ProductsService,
    private productStateService:ProductsStateService
    ) { }

      fetchProducts(){
        this.productStateService.setLoading(true)
        this.productStateService.getDropdownValue().subscribe((res:any) =>{
        this.searchValue$ = res
        this.productStateService.setLoading(false)
        if(res === 'Choose category'){
          // this.searchValue$ = of([])  
        // როდესაც იქნება Choose category მინდა რო ყველა კატეგორია დაბრუნდეს მაგრამ აღარ აკეთებს
        }
        this.productsService.getProductsSearch(this.searchValue$).subscribe((res:any) =>{
          this.productList = res.products
          this.productList.forEach((a:any) => {
            Object.assign(a, {quantity:1, total: a.price})
          })
       })
      })
    }
  }
