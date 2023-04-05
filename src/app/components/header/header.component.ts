import { HttpService } from './../../service/http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component,  OnDestroy,  OnInit, Output, ViewChild } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {

  productSearch: any;

  searchResults$ = new Subject();

  private searchProduct$ = new Subject<any>();

  searchForm = new FormGroup({
  search: new FormControl('')

})

  constructor(private httpService: HttpService) {
    this.searchForm.get('search')?.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),

      switchMap((s) => this.httpService.getProcucts(s))
    )
    .subscribe(
      (s) => {
        this.productSearch = s?.search
      }
    )
}

  ngOnInit(): void {
 
  }

  ngOnDestroy() {
    this.searchProduct$.unsubscribe();
  }
  onShopClick(){
    alert('Please, Long In')
  }
}
 
