import { ActionReducerMap } from "@ngrx/store";
import { authReducer } from "../modules/auth/store/auth.reducer";
import { cartReducer } from "../modules/cart/store/cart.reducer";
import { orderReducer } from "../modules/orders/store/order.reducer";
import { productReducer } from "../modules/products/store/products.reducer";
import { AppState } from "./app.state";

export const rootReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer
};
