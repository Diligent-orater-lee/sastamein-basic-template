import { createAction, props } from "@ngrx/store";
import { CartItem } from "./cart.state";

export const loadCartItems = createAction('[Cart] Load Cart Details');
export const loadCartItemsSuccess = createAction('[Cart] Load Cart Details Success', props<{data: CartItem[]}>());
export const loadCartItemsFailure = createAction('[Cart] Load Cart Details Failure', props<{error: any}>());
export const addToCartAction = createAction('[Cart] Add To Cart', props<{productId: string}>());
export const toggleWishlistAction = createAction('[Cart] Add To Wishlist', props<{productId: string}>());
