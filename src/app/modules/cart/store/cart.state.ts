import { CartItemDto } from "../../../shared/interfaces";

export interface CartState {
  cartItems: CartItemDto[];
  error: string;
  loading: boolean;
  wishListProducts: string[];
}
