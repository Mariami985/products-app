import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';
import { Product, ProductsStateService } from 'src/app/services/products-service/products-state.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  productsList$:Observable<any> =this.productStateService.getProducts()
  loading$:Observable<boolean> = this.productStateService.getLoading();
  error$:Observable<boolean> = this.productStateService.getError();
  searchValue$:Observable<any> = this.productStateService.getSearchValue();

  // categoryValue$:Observable<any> = this.productStateService.getCategoryValue();

  constructor(private productStateService:ProductsStateService,
    private productsListService:ProductsListService, ){ }


  ngOnInit(): void {
    this.filterProducts()
  }
  
  filterProducts(){
    this.searchValue$.subscribe((categoryValue:any) => {
      console.log(categoryValue)
      if(categoryValue && categoryValue.products) {
          this.searchValue$ = of(categoryValue.products);
      }
    })
  }
  addToCart(addProduct: any) {
    this.productStateService.addtoCart(addProduct);
  }
}

// filterProducts() {
//   this.searchValue$.pipe(
//     filter(categoryValue => !!categoryValue && !!categoryValue.products),
//     map(categoryValue => categoryValue.products),
//     tap(products => this.productsList$ = of(products))
//   ).subscribe();
// }