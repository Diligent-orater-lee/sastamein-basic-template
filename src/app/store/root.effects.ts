import { CartEffects } from "../modules/cart/store/cart.effects";
import { ProductEffects } from "../modules/products/store/products.effects";

export const rootEffects = [CartEffects, ProductEffects];
