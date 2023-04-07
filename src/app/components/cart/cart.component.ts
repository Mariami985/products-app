import {  Product } from '../../service/product.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { FilterService } from 'src/app/service/filter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  searchValue = ''
  public productList: any;

constructor(private  productService:  Product, private serviceLogin: AuthService, private searchService:FilterService) {
      this. productService.getProductList().subscribe(response => {
          this.productList = response.products
        })
}

  ngOnInit(): void {
    if(!this.serviceLogin.isLogin){
      this.productService.navigate(['/login'])
    }
    this.searchService.getSearchValue().subscribe(value => {
      this.searchValue = value;
      this.productService.getProcucts(this.searchValue).subscribe((res:any) =>{
        this.productList = res.products
     })
    });
  }
}

