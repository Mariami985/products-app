import { Injectable } from '@angular/core';
import { VirtualStorage } from './virtual-storage.class';
import {Products} from '../interface/prod-interface';

@Injectable({
  providedIn: 'root'
})

export class ProductStorageService extends VirtualStorage<Products>  {

  constructor() {
   
    super();

      this.add({
        id: 1,
        url:"../../assets/img/pizza.jpg",
        alt:"Pro-img1",
        type: 'box',
        title: 'Pizza storage box',
        description: 'description 1',
        price: 10,
        quantity: 500
       });
       this.add({
        id: 2,
        url:"../../assets/img/container.jpg",
        alt:"Pro-img2",
        type: 'container',
        title: 'food storage container',
        description: 'description 2',
        price: 0.15,
        quantity: 1000
       });
       this.add({
        id: 3,
        url:"../../assets/img/dishis.jpg",
        alt:"Pro-img3",
        type: 'dishes',
        title: 'forks, spoons, plates',
        description: 'description 3',
        price: 0.02,
        quantity: 1000
       });
       this.add({
        id: 4,
        url:"../../assets/img/cup.jpg",
        alt:"Pro-img4",
        type: 'cup',
        title: 'Disposable paper cups',
        description: 'description 4',
        price: 0.03,
        quantity: 1000
       })
  }
}

