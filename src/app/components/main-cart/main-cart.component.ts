import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-cart',
  templateUrl: './main-cart.component.html',
  styleUrls: ['./main-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCartComponent  {

@Input() productItem: any[] = [];
@Input() grandTotal: number = 0;
@Output() removeItemClick = new EventEmitter();
@Output() emptyCartItemClick = new EventEmitter();

 removeItem(item:any){
    this.removeItemClick.emit(item)

  }
  emptyCartItem(){
    this.emptyCartItemClick.emit()
  }

}
