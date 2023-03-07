import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-descr-product',
  templateUrl: './descr-product.component.html',
  styleUrls: ['./descr-product.component.scss']
})
export class DescrProductComponent  implements OnInit, OnChanges{

  @Input() items: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
  console.log('on change method', changes);
  }
  ngOnInit(): void {
    console.log('on init method');
  }
}
