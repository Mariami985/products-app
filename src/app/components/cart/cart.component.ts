import { HttpService } from './../../service/http.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  public productList: any;

  // public productSearch:Array<any> = []
  // searchForm = new FormGroup({
  // search: new FormControl('')
  // })

constructor(private httpService: HttpService) {

      this.httpService.getProductList().subscribe(response => {
          this.productList = response.products
        })

          // this.searchForm.get('search')?.valueChanges
          // .pipe(
          //   debounceTime(500),
          //   distinctUntilChanged(),
          //   switchMap((s) => this.httpService.getProcucts(s))
          // )
          // .subscribe(
          //   (s) => {
          //     this.productSearch = s?.search
          //   }
          // )
      
  }

  ngOnInit(): void {
  }
  }

