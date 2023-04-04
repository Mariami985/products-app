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

  searchForm = new FormGroup({
    search: new FormControl('')
})
search = ''

  constructor(private httpService: HttpService) {
    this.searchForm.valueChanges.subscribe((values) => {

      this.getData(values.search)
    })

  }

  ngOnInit(): void {
     this.onClick(this.search) 
  }


  getData(search?:string | null | undefined){
    this.httpService.getProduct().subscribe(response => {
        this.productList = response.products
      })
  }
  onClick(event:any){
    if(event.value != undefined){
      this.search= event.value
    }
    
    
    this.httpService.getProduct(this.search).subscribe(response => {
      this.productList = response.products
    })
  }
}
