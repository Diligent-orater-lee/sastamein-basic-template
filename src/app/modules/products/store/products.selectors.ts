import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./products.state";

export const selectProductState = createFeatureSelector<ProductState>('products');
export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);
export const selectProductsPredictedTexts = createSelector(
  selectProductState,
  (state: ProductState) => state.productsPredictedTexts
);
