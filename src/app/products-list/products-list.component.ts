import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent  implements OnInit, OnChanges{
  
 @Input() items: any[] = [];

 ngOnChanges(changes: SimpleChanges): void {
  console.log('on change method', changes);
  }
  ngOnInit(): void {
    console.log('on init method');
  }
}
