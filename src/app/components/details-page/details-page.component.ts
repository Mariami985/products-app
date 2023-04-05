import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  constructor( private httpService: HttpService, private route:ActivatedRoute) {}

productsId:any;
itemProduct: any;
  
 ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        this.productsId = params.get('id')
    })
    this.getProductById(this.productsId)

  }
  getProductById(id: any) {
    this.httpService.getdetailProdact(id).subscribe((res) => {
      this.itemProduct = res;
    })
  }
}
