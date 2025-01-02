import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { ProductService } from "../../../services/product.service";
import { loadCategories, loadCategoriesDto, loadCategoryWithSubProductsDto, loadFilteredProducts, loadHotDealProducts, loadProductsPredictedTexts, loadRecommendedProducts, setCategories, setCategoriesDto, setCategoryWithSubProductsDto, setFilteredProducts, setHotDealProducts, setProductsPredictedTexts, setRecommendedProducts } from "./products.actions";

@Injectable()
export class ProductEffects {

  action$ = inject(Actions);
  productService = inject(ProductService);

  textLoadEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadProductsPredictedTexts),
      switchMap((action) => this.productService.getProductTextPrediction(action.result).pipe(
        map((res) => setProductsPredictedTexts(res))
      ))
    )
  )

  categoryWithSubProductsLoadEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadCategoryWithSubProductsDto),
      switchMap((action) => this.productService.getCategoryWithSubProducts().pipe(
        map((res) => setCategoryWithSubProductsDto(res))
      ))
    )
  );

  categoryDtosLoadEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadCategoriesDto),
      switchMap((action) => this.productService.getAllFilterCategories().pipe(
        map((res) => setCategoriesDto(res))
      ))
    )
  );

  categoryLoadEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadCategories),
      switchMap((action) => this.productService.getAllCategories().pipe(
        map((res) => setCategories(res))
      ))
    )
  );

  hotDealProductsLoadEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadHotDealProducts),
      switchMap((action) => this.productService.getAllHotDeals().pipe(
        map((res) => setHotDealProducts(res))
      ))
    )
  );

  recommendedProductsLoadEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadRecommendedProducts),
      switchMap((action) => this.productService.getAllRecommendedProducts(action.selectedProductId).pipe(
        map((res) => setRecommendedProducts(res))
      ))
    )
  );

  setFilteredProductsEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadFilteredProducts),
      switchMap((action) => this.productService.getAllProducts({
        categoryIds: action.categoryIds,
        search: action.search,
        minPrice: action.minPrice,
        maxPrice: action.maxPrice
       }).pipe(
        map((res) => setFilteredProducts(res))
      ))
    )
  );
}
