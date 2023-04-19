import { ProductsService } from 'src/app/services/products-service/products.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { searchProduct,  searchProductsSuccess,searchProductsFailure, } from "./product.action";
import {map, switchMap, catchError} from 'rxjs/operators'
import {of } from 'rxjs';

@Injectable ()

export class ProductsEffects {
     constructor(
          private actions$: Actions,
          private productService: ProductsService
        ) {}
      
     searchProducts$ = createEffect(() => 
     this.actions$.pipe(
          ofType(searchProduct),
          switchMap(({searchTerm}) => 
               this.productService.getProductsSearch(searchTerm).pipe(
                    map((products) =>
                        products.filter((product:any) =>
                        product.name.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                    ),
                    map((results) => searchProductsSuccess({ results })),
                    catchError((error) => of(searchProductsFailure({ error })))
                  )
                )
                )
              )
          }