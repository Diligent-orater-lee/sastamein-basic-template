import { createAction, props } from "@ngrx/store";
import { CartItem } from "./cart.state";

export const loadCartItems = createAction('[Cart] Load Cart Details');
export const loadCartItemsSuccess = createAction('[Cart] Load Cart Details Success', props<{data: CartItem[]}>());
export const loadCartItemsFailure = createAction('[Cart] Load Cart Details Failure', props<{error: any}>());
