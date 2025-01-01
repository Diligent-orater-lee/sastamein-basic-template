import { createReducer, on } from "@ngrx/store";
import { loadCartItems, loadCartItemsFailure, loadCartItemsSuccess } from "./cart.actions";
import { CartState } from "./cart.state";

const initialState: CartState = {
  cartItems: [],
  error: '',
  loading: false
}

export const cartReducer = createReducer<CartState>(
  initialState,

  on(loadCartItems, (state, action) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadCartItemsSuccess, (state, action) => ({
    ...state,
    loading: false,
    cartItems: action.data
  })),
  on(loadCartItemsFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  })
)
