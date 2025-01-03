import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { CartService } from "../../../services/cart.service";
import { addToCartAction, addToCartActionFailure, addToCartActionSuccess, deleteFromCartAction, deleteFromCartActionFailure, deleteFromCartActionSuccess, loadCartData, loadCartDataSuccess, loadCartItemsFailure, setCartOwnerId } from "./cart.actions";

@Injectable()
export class CartEffects {

  private actions$ = inject(Actions);
  private cartService = inject(CartService);

  getCartDetailsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCartData),
      mergeMap(() => this.cartService.getCart().pipe(
        this.cartRequestTapper(),
        map(res => loadCartDataSuccess(res)),
        catchError(error => of(loadCartItemsFailure({ error })))
      ))
    )
  );

  addToCartEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToCartAction),
      mergeMap((action) => this.cartService.addCart(action.productId).pipe(
        this.cartRequestTapper(),
        map(res => addToCartActionSuccess(res)),
        catchError(error => of(addToCartActionFailure({ error })))
      ))
    )
  );

  addToCartEffectSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToCartActionSuccess),
      map(action => loadCartData())
    )
  );

  deleteFromCartEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteFromCartAction),
      mergeMap((action) => this.cartService.deleteCart(action).pipe(
        this.cartRequestTapper(),
        map(res => deleteFromCartActionSuccess(res)),
        catchError(error => of(deleteFromCartActionFailure({ error })))
      ))
    )
  );

  cartRequestTapper() {
    return tap((response: any) => {
      if (response.cartOwnerId) {
        localStorage.setItem('cartOwnerId', response.cartOwnerId);
        setCartOwnerId({ cartOwnerId: response.cartOwnerId });
      }
    });
  }
}
