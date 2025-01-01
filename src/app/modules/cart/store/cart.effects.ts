import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { CartService } from "../../../services/cart.service";
import { loadCartItems, loadCartItemsFailure, loadCartItemsSuccess } from "./cart.actions";

@Injectable()
export class CartEffects {

  private actions$ = inject(Actions);
  private cartService = inject(CartService);

  effects$ = createEffect(() =>
    this.actions$.pipe(
      tap(console.log),
      ofType(loadCartItems),
      mergeMap(() => this.cartService.getCartItems().pipe(
        map(res => loadCartItemsSuccess(res)),
        catchError(error => of(loadCartItemsFailure({ error })))
      ))
    )
  );
}
