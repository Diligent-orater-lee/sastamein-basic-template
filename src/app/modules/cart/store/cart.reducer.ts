import { createReducer, on } from "@ngrx/store";
import { loadCartItems, loadCartItemsFailure, loadCartItemsSuccess, toggleWishlistAction } from "./cart.actions";
import { CartState } from "./cart.state";

const initialState: CartState = {
  cartItems: [],
  error: '',
  loading: false,
  wishListProducts: JSON.parse(localStorage.getItem('wishListProducts') ?? "[]")
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
  }),
  on(toggleWishlistAction, (state, action) => {
    const productId = action.productId;
    const isProductAlreadyAdded = state.cartItems.find(item => item === productId);
    let newState;
    if(isProductAlreadyAdded) {
      newState = {
        ...state,
        wishListProducts: state.wishListProducts.filter(item => item !== productId)
      }
    } else {
      newState = {
        ...state,
        wishListProducts: [...state.wishListProducts, action.productId]
      }
    }

    localStorage.setItem('wishListProducts', JSON.stringify(newState.wishListProducts));
    return newState;
  })
)
