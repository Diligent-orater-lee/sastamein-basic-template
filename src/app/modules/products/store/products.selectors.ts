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
export const categoryWithSubProductsSelector = createSelector(
  selectProductState,
  (state) => state.categoryWithSubProductsDto
)
export const categoriesDtoSelector = createSelector(
  selectProductState,
  (state) => state.categoriesDtos
)
export const recommendedProductsSelector = createSelector(
  selectProductState,
  (state) => state.recommendedProducts
)
export const hotDealProductsSelector = createSelector(
  selectProductState,
  (state) => state.hotDealProducts
)
