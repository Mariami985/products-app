import { createReducer, on } from "@ngrx/store";
import { searchProduct} from "./product.action"

export interface ProductsState {
     products: any[];
     searchResults: any[];
     error: any;
}

export const initialState:ProductsState = {
     products: [],
     searchResults: [],
     error: null,
}

export const productReducer = createReducer(
     initialState,
     on(searchProduct, (state, {searchTerm}) => ({
          ...state,
          product: [...state.products, searchTerm]

     }))
)