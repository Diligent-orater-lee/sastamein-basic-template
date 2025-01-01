import { createReducer, on } from "@ngrx/store";
import { loadProducts } from "./products.actions";
import { ProductState } from "./products.state";

const initialState: ProductState = {
  products: [],
  error: '',
  loading: false
}

export const productReducer = createReducer<ProductState>(
  initialState,
  on(loadProducts, (state, action) => ({
    ...state,
    loading: true
  }))
)
