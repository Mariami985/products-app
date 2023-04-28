import { ProductsStateService } from 'src/app/services/products-service/products-state.service';
import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth-service/login.service';
import { CartService } from 'src/app/services/products-service/cart.service';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';


@Component({
  selector: 'app-main-cart',
  templateUrl: './main-cart.component.html',
  styleUrls: ['./main-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCartComponent implements OnInit {

  @Output() itemRemoved = new EventEmitter<any>();

// item$: Observable<any> = this.productsStateService.getItemProducts()
public productItem: any = [];
public grandTotal !: number ;
  
// productItem$:Observable<any> = this.productsStateService.getAddtoCart()

  constructor (private serviceLogin: LoginService, 
                    private productsStateService:ProductsStateService,
                    private cartService:CartService,
                    private productsListService:ProductsListService,
                    private router: Router, 
                    private route: ActivatedRoute){}
                    
  ngOnInit(): void {
    this.cartService.getItemProducts().subscribe(res => {
      this.productItem = res
      this.productItem.forEach((a:any) => {
        Object.assign(a, {quantity: 1, total: a.price});
      });
      this.grandTotal = this.cartService.getToTalPrice();
    })
  }
 removeItem(item:any){
    this.cartService.removeCartItem(item);
    this.itemRemoved.emit(item);
  }
  emptyCartItem(){
    this.cartService.removeAllCart();
  }

}
