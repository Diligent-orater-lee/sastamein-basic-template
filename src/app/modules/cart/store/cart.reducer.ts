import { createReducer, on } from "@ngrx/store";
import Swal from 'sweetalert2';
import { addToCartActionSuccess, loadCartDataSuccess, loadCartItemsFailure, toggleWishlistAction } from "./cart.actions";
import { CartState } from "./cart.state";

const initialState: CartState = {
  cartItems: [],
  error: '',
  loading: false,
  wishListProducts: JSON.parse(localStorage.getItem('wishListProducts') ?? "[]")
}

export const cartReducer = createReducer<CartState>(
  initialState,

  on(loadCartDataSuccess, (state, action) => {
    return {
      ...state,
      cartItems: action.data,
      loading: false
    }
  }),
  on(loadCartItemsFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }),

  on(addToCartActionSuccess, (state, action) => {
    Swal.fire({
      icon: 'success',
      title: 'Great!',
      text: 'Product Added To Your Cart Successfully'
    });

    return {
      ...state,
      loading: false
    }
  }),

  on(toggleWishlistAction, (state, action) => {
    const productId = action.productId;
    const isProductAlreadyAdded = state.wishListProducts.includes(productId);
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
