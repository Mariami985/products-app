import {  Product } from '../../service/product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component,  OnDestroy,  OnInit, Output, ViewChild } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {

  productSearch: any;

  searchResults$ = new Subject();

  private searchProduct$ = new Subject<any>();

  searchForm = new FormGroup({
  search: new FormControl('')

})

  constructor(private  productService:  Product, private serviceLogin: AuthService) {
    this.searchForm.get('search')?.valueChanges 
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),

      switchMap((s) => this. productService.getProcucts(s))
    )
    .subscribe(
      (s) => {
        this.productSearch = s?.search
      }
    )
}

ngOnInit(): void {

  if(!this.serviceLogin.isLogin){
    this.productService.navigate(['/login'])
  }
}

  ngOnDestroy() {
    this.searchProduct$.unsubscribe();
  }
  onShopClick(){
    alert('Please, Long In')
  }
}
 
