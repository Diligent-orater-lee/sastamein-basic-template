import { createReducer, on } from "@ngrx/store";
import { loadProducts, setProductsPredictedTexts } from "./products.actions";
import { ProductState } from "./products.state";

const initialState: ProductState = {
  products: [],
  error: '',
  loading: false,
  productsPredictedTexts: []
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
  }))
)
