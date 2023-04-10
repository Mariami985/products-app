import { CartService } from 'src/app/auth/service/cart.service';
import {  Product } from '../../service/product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component,  OnDestroy,  OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { FilterService } from 'src/app/service/filter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  
  categoryList:any[]=[];

  public totalItem: number = 0;

  private searchProduct$ = new Subject<any>();
  constructor( private  productService:  Product,
      private serviceLogin: AuthService, 
      private searchService:FilterService,
      private cartService:CartService,
      private router: Router, 
      private route: ActivatedRoute,
      
  ) { }

ngOnInit(): void {
  this.getCategories();

  this.cartService.getItemProducts().subscribe(res => {
      this.totalItem = res.length;
      console.log(this.totalItem)
  })
 
}

getCategories(){
  this.productService.getDropdow().subscribe((data:any)=> {
    this.categoryList=data;
    console.log(this.categoryList)
  })
}

logSelected($event:any){
  console.log($event.value)
  this.searchService.setDropdownValue($event.value)
}
onClick(){
  localStorage.removeItem('token');
  this.router.navigate([''])
}
  ngOnDestroy() {
    this.searchProduct$.unsubscribe();
  }
}
 
