import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/products-service/cart.service';

import { ProductsService } from 'src/app/services/api/products.service';
import { BehaviorSubject, Observable, map, of, switchMap, tap} from 'rxjs';
import { ProductsStateService } from 'src/app/services/products-service/products-state.service';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';



@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
  providers: [ProductsListService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainListComponent implements OnInit{

  productsList$:Observable<any[]> =this.productStateService.getProducts()
  loading$:Observable<boolean> = this.productStateService.getLoading();
  searchValue$:Observable<any> = this.productStateService.getSearchValue();
  categoryValue$:Observable<any> = this.productStateService.getCategoryValue();
  
 products:any

   constructor(private productStateService:ProductsStateService,
    private productsService: ProductsService,
    private productsListService:ProductsListService,
    private cartService: CartService){ }

ngOnInit(): void {
    this.productsListService.listOfProducts()
    this.fetchProducts()
}

fetchProducts(){
  this.searchValue$.subscribe((categoryValue:any) => {
     let seachValue = sessionStorage.getItem("searchValue")
     console.log(seachValue)
 
    if (seachValue == "Choose category") {
      this.productStateService.getProducts().subscribe(products => {
        this.productsList$ = of(products);
      });
    } 
   else if(categoryValue && categoryValue.products) {
      this.products = categoryValue.products;
      this.productsList$ = of(this.products);
      
    } 
  });
}
  addtocart(item: any){
    this.cartService.addtoCart(item);
    // this.productsService.getAddCart(item) 
    console.log(item)
  }

}






// fetchProducts(){
//   this.productStateService.setLoading(true);
//   this.productStateService.getCategoryValue().subscribe((res:any) =>{
//     this.searchValue$ = res
//     this.productStateService.setLoading(false)
//     if(res === 'Choose category'){
//       this.searchValue$ = of('')
//     }else {
//       this.searchValue$ = of(res)
//     }
//   this.productsList$ = this.searchValue$.pipe(
//     switchMap((value: string) => this.productsService.getProductsSearch(value)),
//     map((res: any) => res.products),
//     tap((products: any) => {
//       products.forEach((a: any) => {
//         Object.assign(a, {quantity:1, total: a.price });
//       });
//     })
//   );
// })
// } 

