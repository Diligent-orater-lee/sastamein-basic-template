import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { ProductService } from "../../../services/product.service";
import { loadProductsPredictedTexts, setProductsPredictedTexts } from "./products.actions";

@Injectable()
export class ProductEffects {

  action$ = inject(Actions);
  productService = inject(ProductService);

  productEffects = createEffect(() =>
    this.action$.pipe(
      ofType(loadProductsPredictedTexts),
      switchMap((action) => this.productService.getProductTextPrediction(action.result).pipe(
        map((res) => setProductsPredictedTexts(res))
      ))
    )
  )
}
