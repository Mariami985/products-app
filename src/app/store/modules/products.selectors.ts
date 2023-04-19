import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productReducer, ProductsState } from './product.reducer';
// import { ProductsState } from './products.reducer';

export const selectProductState = createFeatureSelector<ProductsState>('product');

export const selectSearchResults = createSelector(
     selectProductState,
     (state: ProductsState) => state.searchResults
)