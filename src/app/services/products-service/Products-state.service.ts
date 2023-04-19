import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StateService } from '../stateService';
import { ProductsService } from './products.service';

export interface Product{
  product: any[];
  searchValue: any,
  dropdownValue: any,
  loading: any,
}

const initialState: Product = {
  product : [],
  searchValue: '',
  dropdownValue: '',
  loading:false,
}
@Injectable({
  providedIn: 'root'
})
export class ProductsStateService extends StateService<Product> {

  // private searchValue = new BehaviorSubject<string>('');
  // private dropDownValue = new BehaviorSubject<string>('');

  constructor( private productsService: ProductsService) { 
    super(initialState)
  }

  setSearchValue(searchValue: any){
    this.setState({searchValue})
  }
  setDropdownValue(dropdownValue: any){
    this.setState({dropdownValue})
  }
  setLoading(loading:boolean){
    this.setState({loading})
  }

// ჯერ არ ვიყენებ
setProduct(product: any[]){
  this.setState({product})
}
 
getProduct(){
  return this.select((state) => state.product)
}
  getSearchValue(){
    return this.select((state) => state.searchValue)
  }

  getDropdownValue(){
    return this.select((state) => state.dropdownValue)
  }
  getLoading() {
    return this.select((state) => state.loading);
  }
}

 // setDropdownValue(value: any) {
  //   this.dropDownValue.next(value);
  // }


  // getDropdownValue() {
  //   return this.dropDownValue.asObservable();
  // }

   // getSearchValue() {
  //   return this.searchValue.asObservable();
  // }

   // setSearchValue(value: any) {
  //   this.searchValue.next(value);
  // }
