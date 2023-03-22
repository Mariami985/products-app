import { Component} from '@angular/core';
import {ProductStorageService} from '../../services/product-storage.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {

items:any


constructor (private service: ProductStorageService ) {
    this.items = service.find({})

  }
}
