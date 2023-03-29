import { HttpService } from './../../service/http.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public productList: any;


  constructor(private httpService: HttpService) {
    
  }
  ngOnInit(): void {
      this.httpService.getProdact()
      .subscribe(response => {
        this.productList = response;
      })
      
  }
}
