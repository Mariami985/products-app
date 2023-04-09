import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-deshbord',
  templateUrl: './deshbord.component.html',
  styleUrls: ['./deshbord.component.scss']
})
export class DeshbordComponent implements OnInit {

  public productItem: any = [];
  public grandTotal !: number ;

  constructor(private serviceLogin: AuthService, 
                    private cartService:CartService,
                    private router: Router, 
                    private route: ActivatedRoute
                    ) {}

  ngOnInit(): void {
    this.cartService.getItemProducts().subscribe(res => {
      this.productItem = res
      console.log(this.productItem)
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
