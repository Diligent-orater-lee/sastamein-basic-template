import { createAction, props } from "@ngrx/store";
import { CartItemDto } from "../../../shared/interfaces";

export const setCartOwnerId = createAction('[Cart] Set Cart Owner Id', props<{ cartOwnerId: string }>());

export const loadCartData = createAction('[Cart] Load Cart Data');
export const loadCartDataSuccess = createAction('[Cart] Load Cart Data Success', props<{ data: CartItemDto[] }>());
export const loadCartItemsFailure = createAction('[Cart] Load Cart Data Failure', props<{ error: any }>());

export const addToCartAction = createAction('[Cart] Add To Cart', props<{productId: string}>());
export const addToCartActionSuccess = createAction('[Cart] Add To Cart Success', props<{cartItems: CartItemDto[]}>());
export const addToCartActionFailure = createAction('[Cart] Add To Cart Failure', props<{error: any}>());

export const deleteFromCartAction = createAction('[Cart] Delete From Cart', props<{productId: string, mode: string}>());
export const deleteFromCartActionSuccess = createAction('[Cart] Delete From Cart Success', props<{cartItems: CartItemDto[]}>());
export const deleteFromCartActionFailure = createAction('[Cart] Delete From Cart Failure', props<{error: any}>());

export const toggleWishlistAction = createAction('[Cart] Add To Wishlist', props<{productId: string}>());
