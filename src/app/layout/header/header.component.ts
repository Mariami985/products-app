import { Component,OnInit } from '@angular/core';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';
import { ProductsStateService } from 'src/app/services/products-service/products-state.service';

// header smart component, 
// there are code categoryList and search click, 
// also cartComponent total item, how many item add in cart

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  categoryList$ = this.productStateService.getCategoryValue();
  
  public totalItem: number = 0;


  constructor( private productStateService:ProductsStateService,
                      private productsListService:ProductsListService){}

  ngOnInit(): void {
    this.productsListService.categoryList()
    this.productStateService.getCartItem().subscribe(res => {
        this.totalItem = res.length;
    })
  }
  search($event:any){
    this.productsListService.searchCategory($event.value)
  }
}
