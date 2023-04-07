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

  productSearch: any;
  searchValue = '';
  categoryList:any[]=[];

  private searchProduct$ = new Subject<any>();

//   categoryForm = new FormGroup({
//   category: new FormControl('')

// })

  constructor( private  productService:  Product,
      private serviceLogin: AuthService, 
      private searchService:FilterService,
      private router: Router, 
      private route: ActivatedRoute
  ) { }

ngOnInit(): void {

  if(!this.serviceLogin.isLogin){
    this.productService.navigate(['/login'])
  }
  this.getCategories();
 
}

getCategories(){
  this.productService.getDropdow().subscribe((data:any)=> {
    this.categoryList=data;
    console.log(this.categoryList)
  })
}

updateSearchValue(event:any) {
  let search = event.target.value
  this.searchService.setSearchValue(search);
}
// updateDropValue(event:any){
//   let drop = event.target.value
//   this.searchService.setDropdownValue(drop)
// }
onClick(){
  localStorage.removeItem('token');
  this.router.navigate([''])
}
  ngOnDestroy() {
    this.searchProduct$.unsubscribe();
  }
  onShopClick(){
    // alert('Good Luck')
  }

}
 
