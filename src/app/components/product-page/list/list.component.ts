import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, filter, map, of, tap } from 'rxjs';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';
import {  ProductsStateService } from 'src/app/services/products-service/products-state.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit{

  loading$:Observable<boolean> = this.productStateService.getLoading();
  error$:Observable<boolean> = this.productStateService.getError();
  searchValue$:Observable<any> = this.productStateService.getSearchValue();

  constructor(private productStateService:ProductsStateService,
                    private productsListService:ProductsListService, ){ }


  ngOnInit(): void {
    this.productsListService.searchCategory('')
    this.filterProducts()
  }
  
  filterProducts() {
    this.searchValue$.pipe(
      filter(categoryValue => !!categoryValue && !!categoryValue.products),
      map(categoryValue => categoryValue.products),
      tap(products => this.searchValue$ = of(products))
    ).subscribe();
}
  addToCart(addProduct: any) {
    this.productStateService.addtoCart(addProduct);
  }
}