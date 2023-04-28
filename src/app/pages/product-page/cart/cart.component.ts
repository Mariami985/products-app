import { CartService } from './../../../services/products-service/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit{

  @Input() cartItemList: any = []

constructor(private cartService:CartService,){}
 
ngOnInit(): void {
  this.cartItemList = this.cartService.getItemProducts()
  }
 
  onItemRemoved(item: any) {
    this.cartService.removeCartItem(item)
    const index = this.cartItemList.indexOf(item);
    if (index > -1) {
      this.cartItemList.splice(index, 1);
    }

    // update the total price
    this.cartService.getToTalPrice();

    // do any other necessary processing
  }
  }

