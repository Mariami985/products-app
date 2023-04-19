import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth-service/login.service';
import { CartService } from 'src/app/services/products-service/cart.service';

@Component({
  selector: 'app-main-cart',
  templateUrl: './main-cart.component.html',
  styleUrls: ['./main-cart.component.scss']
})
export class MainCartComponent implements OnInit {

public productItem: any = [];
public grandTotal !: number ;
  

  constructor (private serviceLogin: LoginService, 
                    private cartService:CartService,
                    private router: Router, 
                    private route: ActivatedRoute){}
  ngOnInit(): void {
    this.cartService.getItemProducts().subscribe(res => {
      this.productItem = res
      this.grandTotal = this.cartService.getToTalPrice();
    })
  }
 removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptyCartItem(){
    this.cartService.removeAllCart();
  }

}
