import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descr-product',
  templateUrl: './descr-product.component.html',
  styleUrls: ['./descr-product.component.scss']
})
export class DescrProductComponent {

  items = [ 
    {
      id: 1,
      type: 'box',
      title: 'Pizza storage box',
      description: 'description 1',
      price: '10 gel',
      quantity: 0
    },
    {
      id: 2,
      type: 'container',
      title: 'Disposable food storage container',
      description: 'description 2',
      price: '0.15 gel',
      quantity: 0
    },
    {
      id: 3,
      type: 'dishes',
      title: 'Disposable forks, spoons, plates',
      description: 'description 3',
      price: '0.20 gel',
      quantity: 0
    },
    {
      id: 4,
      type: 'cup',
      title: 'Disposable paper cups',
      description: 'description 4',
      price: '0.3 gel',
      quantity: 0
    }
]
}
