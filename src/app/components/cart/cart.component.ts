import {  Product } from '../../service/product.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  public productList: any;

constructor(private  productService:  Product, private serviceLogin: AuthService) {

      this. productService.getProductList().subscribe(response => {
          this.productList = response.products
        })
}

  ngOnInit(): void {

    if(!this.serviceLogin.isLogin){
      this.productService.navigate(['/login'])
    }
  }
}

