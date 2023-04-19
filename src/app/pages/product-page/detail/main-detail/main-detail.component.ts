import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/products-service/cart.service';
import { ProductsService } from 'src/app/services/products-service/products.service';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.scss']
})
export class MainDetailComponent implements OnInit {
  constructor( private  productsService: ProductsService,
    private cartService: CartService,

    private route:ActivatedRoute) {}

productsId:any;
itemProduct: any = [];

ngOnInit(): void {

this.route.paramMap.subscribe(params => {
this.productsId = params.get('id')
})
this.getProductById(this.productsId)

}
getProductById(id: any) {
this.productsService.getdetailProdact(id).subscribe((res) => {
this.itemProduct = res;
})
}
addtocart(item: any){
this.cartService.addtoCart(item);
}
}
