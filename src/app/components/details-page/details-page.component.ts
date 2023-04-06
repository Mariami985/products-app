import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Product} from 'src/app/service/product.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  constructor( private  productService:  Product, private route:ActivatedRoute) {}

productsId:any;
itemProduct: any;
  
 ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        this.productsId = params.get('id')
    })
    this.getProductById(this.productsId)

  }
  getProductById(id: any) {
    this. productService.getdetailProdact(id).subscribe((res) => {
      this.itemProduct = res;
    })
  }
}
