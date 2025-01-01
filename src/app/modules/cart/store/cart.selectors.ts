import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.state";

export const selectCartState = createFeatureSelector<CartState>('cart');

// Then create the derived selector for cart items count
export const selectCartItemsCount = createSelector(
  selectCartState,
  (state: CartState) => state.cartItems.length
);
