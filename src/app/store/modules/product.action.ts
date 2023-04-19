import { createAction, props } from "@ngrx/store";

export const searchProduct = createAction (
     '[Product] Search Products',
     props<{searchTerm: string}>()
)

export const searchProductsSuccess = createAction(
     '[Product] Search Products Success',
      props<{ results: any[] }>()
)
export const searchProductsFailure = createAction(
     '[Product] Search Products Failure',
     props<{ error: any }>()
   );