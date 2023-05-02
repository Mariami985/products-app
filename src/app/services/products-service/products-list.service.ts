import {  Injectable, } from '@angular/core';
import { ProductsService } from '../api/products.service';
import { ProductsStateService } from './products-state.service';

@Injectable({
  providedIn: 'root'
})

export class ProductsListService {
  
  constructor( private productsService: ProductsService,
                      private productStateService:ProductsStateService) { }

    categoryList(){
      this.productStateService.setLoading(true);
      this.productsService.getCategory().subscribe(
        (categoryValue) => {
          this.productStateService.setCategoryValue(categoryValue)
          console.log(categoryValue)
        },
        (error) => {
          this.productStateService.setError(error)
          this.productStateService.setLoading(false);
        }
      )
    }
    searchCategory(searchValue:any){
      this.productStateService.setLoading(true);
      this.productsService.getProductsSearch(searchValue).subscribe(
        (searchValue) => {
          this.productStateService.setSearchValue(searchValue)
          this.categoryList = searchValue
          this.productStateService.setLoading(false);
          console.log(searchValue)
        },
        (error) => {
          this.productStateService.setError(error)
          this.productStateService.setLoading(false);
        }
      )
    }
    detailPage(productId:any){
      this.productStateService.setLoading(true);
      this.productsService.getdetailProdact(productId).subscribe(
        (detailPage) => {
          this.productStateService.setDetailPage(detailPage)
          this.productStateService.setLoading(false);
        },
        (error) => {
          this.productStateService.setError(error)
          this.productStateService.setLoading(false);
        }
      )
    }
}