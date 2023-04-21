import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { StateService } from '../stateService';
import { ProductsService } from './products.service';


export interface Product{
  products: any[],
  searchValue: any,
  categoryValue: any,
  loading: any,
  
}

const initialState: Product = {
  products : [],
  searchValue: '',
  categoryValue: '',
  loading:false,

}
@Injectable({
  providedIn: 'root'
})
export class ProductsStateService extends StateService<Product> {


  constructor( private productsService: ProductsService) { 
    super(initialState);
  }

  setProducts(products:any){
    this.setState({products})
  }

  setSearchValue(searchValue: any){
    this.setState({searchValue})
  }
  setCategoryValue(categoryValue: any){
    this.setState({categoryValue})
  }
  setLoading(loading:boolean){
    this.setState({loading})
  }
  


//  მთელი პროდუქცია

getProducts(){
  return this.select((state) => state.products)
}

// რითაც იფილტრება, იძებნება
getSearchValue(){
    return this.select((state) => state.searchValue)
  }
// კატეგორიები რაც ჩანს
getCategoryValue(){
    return this.select((state) => state.categoryValue)
  }

getLoading() {
    return this.select((state) => state.loading);
  }
}