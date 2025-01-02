import { createAction, props } from "@ngrx/store";
import { CategoryWithSubProductsDto, ProductCategory, ProductCategoryDto, ProductListItem } from "../../../shared/interfaces";

export const loadProducts = createAction('[Products] Load Products');
export const searchProducts = createAction('[Search] Search', (query: string) => ({ query }));
export const loadProductsPredictedTexts = createAction('[Products] Load Products Predicted Texts', (result: string) => ({ result }));
export const setProductsPredictedTexts = createAction('[Products] Set Products Predicted Texts', props<{ result: string[] }>());
export const loadCategoryWithSubProductsDto = createAction('[Products] Load Category With Sub Products Dto');
export const setCategoryWithSubProductsDto = createAction('[Products] Set Category With Sub Products Dto', props<{ result: CategoryWithSubProductsDto[] }>());
export const loadCategories = createAction('[Products] Load Categories');
export const setCategories = createAction('[Products] Set Categories', props<{ result: ProductCategory[] }>());
export const loadCategoriesDto = createAction('[Products] Load Categories Dto');
export const setCategoriesDto = createAction('[Products] Set Categories Dto', props<{ result: ProductCategoryDto[] }>());
export const loadRecommendedProducts = createAction("[Products] Load Recommended Products", props<{selectedProductId?: string}>());
export const setRecommendedProducts = createAction("[Products] Set Recommended Products", props<{result: ProductListItem[]}>());
export const loadHotDealProducts = createAction("[Products] Load HotDeal Products")
export const setHotDealProducts = createAction("[Products] Set HotDeal Products", props<{result: ProductListItem[]}>());

// Filtered products actions
export const loadFilteredProducts = createAction(
  '[Products] Load Filtered Products',
  props<{
    categoryIds: string[],
    search: string,
    minPrice: number,
    maxPrice: number
  }>()
);

export const setFilteredProducts = createAction(
  '[Products] Set Filtered Products',
  props<{ result: ProductListItem[] }>()
);

export const setLoading = createAction(
  '[Products] Set Loading',
  props<{ loading: boolean }>()
);
