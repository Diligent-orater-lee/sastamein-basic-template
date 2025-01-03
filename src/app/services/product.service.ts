import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { APIUrls } from '../shared/constants';
import { CategoryWithSubProductsDto, ProductCategory, ProductCategoryDto, ProductListItem } from '../shared/interfaces';

export type ProductFilters = {
  page?: number;
  limit?: number;
  search?: string;
  categoryIds?: string[];
  minPrice?: number;
  maxPrice?: number;
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllCategories(page: number | undefined = undefined, limit: number | undefined = undefined) {
    return this.http.get<{
      categories: ProductCategory[],
      currentPage: number,
      totalPages: number,
      totalCategories: number
    }>(APIUrls.getAllCategories(page, limit)).pipe(map(res => ({result: res.categories})));;
  }

  getAllProducts(filters: ProductFilters = {}) {
    return this.http.get<{products: ProductListItem[]}>(APIUrls.getAllProducts(filters)).pipe(map(res => ({result: res.products})));
  }

  getProductTextPrediction(text: string) {
    return this.http.get<string[]>(APIUrls.getProductTextPrediction(text)).pipe(map(res => ({result: res})));;
  }

  getCategoryWithSubProducts() {
    return this.http.get<CategoryWithSubProductsDto[]>(APIUrls.getAllCategoriesWithSubProducts).pipe(map(res => ({result: res})));;
  }

  getAllFilterCategories() {
    return this.http.get<ProductCategoryDto[]>(APIUrls.getCategoriesForFilter).pipe(map(res => ({result: res})));;
  }

  getAllHotDeals() {
    return this.http.get<ProductListItem[]>(APIUrls.getAllHotDeals).pipe(map(res => ({result: res})));;
  }

  getAllRecommendedProducts(selectedProductId?: string) {
    return this.http.get<ProductListItem[]>(APIUrls.getAllRecommendedProducts(selectedProductId)).pipe(map(res => ({result: res})));
  }

}
