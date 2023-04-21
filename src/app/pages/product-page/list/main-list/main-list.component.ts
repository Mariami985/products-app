import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/products-service/cart.service';

import { ProductsService } from 'src/app/services/products-service/products.service';
import { Observable, map, of, switchMap, tap} from 'rxjs';
import { ProductsStateService } from 'src/app/services/products-service/Products-state.service';
import { FilterStateService } from 'src/app/services/products-service/filter-state.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit{

  productsList$:Observable<any[]> =this.productStateService.getProducts()
  loading$:Observable<boolean> = this.productStateService.getLoading();
  searchValue$:Observable<any> = this.productStateService.getSearchValue();

   constructor(private productStateService:ProductsStateService,
    private productsService: ProductsService,
    private searchService:FilterStateService,
    private cartService: CartService){}

ngOnInit(): void {
  //! არ წაშალო მუშაობს ეს მაინც
  this.productsList$ = this.productsService.getProductList().pipe(
    map((res:any) => res.products)
  );
    this.fetchProducts();
}
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
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}










  // get itemsOnPage() {
  //   const startIndex = (this.currentPage - 1) * this.pageSize;
  //   const endIndex = startIndex + this.pageSize;
  //   return this.productList.slice(startIndex, endIndex);
  // }

  // nextPage() {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage ++;
  //   }
  // }

  // previousPage() {
  //   if (this.currentPage > 1) {
  //     this.currentPage --;
  //   }
  // }
  // get totalPages(): number {
  //   if (this.productList) {
  //     return Math.ceil(this.productList.length / this.pageSize);
  //   } else {
  //     return 0;
  //   }
  // }
