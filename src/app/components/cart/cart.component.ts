import {  Product } from '../../service/product.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CartService } from 'src/app/auth/service/cart.service';
import { FilterService } from 'src/app/service/filter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  searchValue = ''
  public productList: any;

constructor(private  productService:  Product,
                  private serviceLogin: AuthService, 
                  private searchService:FilterService,
                  private cartService: CartService
                  ) 
                  
                  {
      this. productService.getProductList().subscribe(response => {
          this.productList = response.products
        })
}

  ngOnInit(): void {
    // if(!this.serviceLogin.isLogin){
    //   this.productService.navigate(['/login'])
    // }

    this.searchService.getDropdownValue().subscribe((res:any) =>{
      this.searchValue = res
      console.log(this.searchValue)
      if(res == 'Choose category'){
        this.searchValue = ''
      }
      this.productService.getProducts(this.searchValue).subscribe((res:any) =>{
        this.productList = res.products

        this.productList.forEach((a:any) => {
          Object.assign(a, {quantity:1, total: a.price})
        })
     })
    })



    // this.searchService.getSearchValue().subscribe(value => {
    //   this.searchValue = value;
    //   this.productService.getProducts(this.searchValue).subscribe((res:any) =>{
    //     this.productList = res.products
    //  })
    // });
  }

addtocart(item: any){
  this.cartService.addtoCart(item);

}




}

