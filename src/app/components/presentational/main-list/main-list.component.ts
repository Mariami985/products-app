import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, filter, map, of, startWith, tap} from 'rxjs';
import { ProductsStateService } from 'src/app/services/products-service/products-state.service';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';
import { ProductsService } from 'src/app/services/api/products.service';


@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
  providers: [ProductsListService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainListComponent implements OnInit{

  @Input() products!: any[];
  @Input() loading: any;
  @Input() error: any;
  @Output() addToCartClick = new EventEmitter<any>();

   constructor(private productStateService:ProductsStateService,
    private productsListService:ProductsListService, ){ }

ngOnInit(): void {
    this.productsListService.listOfProducts()
}
  addtocart(item: any){
    this.addToCartClick.emit(item)
  }
}


