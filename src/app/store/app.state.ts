import { AuthState } from "../modules/auth/store/auth.state";
import { CartState } from "../modules/cart/store/cart.state";
import { OrderState } from "../modules/orders/store/order.state";
import { ProductState } from "../modules/products/store/products.state";

export interface AppState {
  auth: AuthState;
  products: ProductState;
  cart: CartState;
  orders: OrderState;
}

