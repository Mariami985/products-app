import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';



@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
  providers: [ProductsListService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainListComponent {

  @Input() products!: any[];
  @Input() loading: any;
  @Input() error: any;
  @Output() addToCartClick = new EventEmitter<any>();

  addtocart(item: any){
    this.addToCartClick.emit(item)
  }
}


