import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    public productList: any;

    constructor(private httpService: HttpService) {

    }
    ngOnInit(): void {
        this.httpService.getProdact()
        .subscribe(response => {
          this.productList = response;
          
          console.log(response)
        })
        
    }
}
// const myObject = { a: 1, b: 2, c: 3 };

// const myArray = Object.entries(myObject);

// console.log(myArray);