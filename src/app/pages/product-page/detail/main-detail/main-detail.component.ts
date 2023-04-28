import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {  ProductsStateService } from 'src/app/services/products-service/products-state.service';

import { CartService } from 'src/app/services/products-service/cart.service';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainDetailComponent implements OnInit {

  // productsId:any;

  itemProduct$:Observable<any>= this.productStateService.getDetailPage()

  @Input() public itemProduct!: any[]



  constructor( private productsListService:ProductsListService,
    private productStateService:ProductsStateService,
    private cartService: CartService,
    private route:ActivatedRoute) {}
    
ngOnInit(): void {
//   this.route.paramMap.subscribe(params => {
//   this.productsId = params.get('id')
// })
// this.productsListService.detailPage(this.productsId)
}
addtocart(item: any){
this.cartService.addtoCart(item);
}
}
