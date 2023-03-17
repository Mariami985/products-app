import { Component, Input } from '@angular/core';
import {ProductStorageService} from './services/product-storage.service'
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
items:any


constructor (private item: ProductStorageService ) {
// this.items = item.getAdd([]);
this.items = item.getFind({ type: "box"})
}
}


