import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import {
  loadCategoriesDto,
  loadFilteredProducts,
  setLoading
} from '../../../modules/products/store/products.actions';
import {
  categoriesDtoSelector,
  selectFilteredProducts,
  selectLoading
} from '../../../modules/products/store/products.selectors';
import { ScrollTop } from '../../../shared/common-functions';
import { ProductCategoryDto, ProductListItem } from '../../../shared/interfaces';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, LoadingSpinnerComponent],
  templateUrl: './catalog.component.html',
  styles: ``
})
export class CatalogComponent implements OnInit, OnDestroy {

  filteredProducts$: Observable<ProductListItem[]>;
  categories$: Observable<ProductCategoryDto[]>;
  isLoading$: Observable<boolean>;

  checksCategory: string[] = [];
  minPrice = 0;
  maxPrice = 0;
  searchValue = '';
  sortToggle = false;

  private destroy$ = new Subject<void>();

  constructor(private store: Store, private route: ActivatedRoute) {
    this.filteredProducts$ = this.store.select(selectFilteredProducts);
    this.categories$ = this.store.select(categoriesDtoSelector);
    this.isLoading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    // Initialize from route params
    const categoryId = this.route.snapshot.queryParams['categoryId'];
    if (categoryId) {
      this.checksCategory.push(categoryId);
    }

    this.searchValue = this.route.snapshot.queryParams['searchValue'] || '';

    // Load initial data
    this.loadData();
    this.setupSearchValueChanges();
    ScrollTop();
  }

  private loadData(): void {
    this.store.dispatch(setLoading({ loading: true }));
    this.store.dispatch(loadCategoriesDto());
    this.dispatchFilteredProducts();
  }

  private setupSearchValueChanges(): void {
    let immediateCall = true;
    setTimeout(() => immediateCall = false, 1000);

    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        if (immediateCall) {
          immediateCall = false;
          return;
        }
        this.searchValue = params['searchValue'] ?? '';
        this.dispatchFilteredProducts();
      });
  }

  private dispatchFilteredProducts(): void {
    this.store.dispatch(loadFilteredProducts({
      categoryIds: this.checksCategory,
      search: this.searchValue,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice
    }));
  }

  getCategoriesFilters(inputValue: any): void {
    const inputVal = inputValue.target.value;
    if (!inputValue.target.checked) {
      this.checksCategory = this.checksCategory.filter(id => id !== inputVal);
    } else {
      this.checksCategory = [...this.checksCategory, inputVal];
    }
    this.dispatchFilteredProducts();
  }

  getMinPriceFilter(priceInput: any): void {
    this.minPrice = Number(priceInput.target.value);
    this.dispatchFilteredProducts();
  }

  getMaxPriceFilter(priceInput: any): void {
    const maxVal = Number(priceInput.target.value);
    if (maxVal > this.minPrice) {
      this.maxPrice = maxVal;
      this.dispatchFilteredProducts();
    }
  }

  getSort(sortVal: string): void {
    this.filteredProducts$ = this.filteredProducts$.pipe(
      map(products => {
        const sorted = [...products];
        return sortVal === "Asc"
          ? sorted.sort((a, b) => a.name.localeCompare(b.name))
          : sorted.sort((a, b) => b.name.localeCompare(a.name));
      })
    );
    this.sortToggle = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
