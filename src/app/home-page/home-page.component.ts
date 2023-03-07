import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  items = [ 
    {
      id: 1,
      type: 'cup',
      title: 'product 1',
      description: 'description 1',
      price: '0.4 gel',
      quantity: 0
    },
    {
      id: 2,
      type: 'box',
      title: 'product 2',
      description: 'description 2',
      price: '10 gel',
      quantity: 0
    },
    {
      id: 3,
      type: 'dishes',
      title: 'product 2',
      description: 'description 3',
      price: '0.3 gel',
      quantity: 0
    }
]
}
