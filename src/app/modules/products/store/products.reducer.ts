import { createReducer, on } from "@ngrx/store";
import { loadProducts, setCategoriesDto, setCategoryWithSubProductsDto, setHotDealProducts, setProductsPredictedTexts, setRecommendedProducts } from "./products.actions";
import { ProductState } from "./products.state";

const initialState: ProductState = {
  products: [],
  error: '',
  loading: false,
  productsPredictedTexts: [],
  categoryWithSubProductsDto: [],
  categoriesDtos: [],
  recommendedProducts: [],
  hotDealProducts: [],
}

export const productReducer = createReducer<ProductState>(
  initialState,
  on(loadProducts, (state, action) => ({
    ...state,
    loading: true
  })),
  on(setProductsPredictedTexts, (state, action) => ({
    ...state,
    productsPredictedTexts: action.result
  })),
  on(setCategoryWithSubProductsDto, (state, action) => ({
    ...state,
    categoryWithSubProductsDto: action.result
  })),
  on(setCategoriesDto, (state, action) => ({
    ...state,
    categoriesDtos: action.result
  })),
  on(setHotDealProducts, (state, action) => ({
    ...state,
    hotDealProducts: action.result
  })),
  on(setRecommendedProducts, (state, action) => ({
    ...state,
    recommendedProducts: action.result
  }))
)
