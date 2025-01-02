import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Splide } from '@splidejs/splide';
import { Observable, tap } from 'rxjs';
import { loadCategories, loadHotDealProducts, loadRecommendedProducts } from '../../../modules/products/store/products.actions';
import { ProductCategory, ProductListItem } from '../../../shared/interfaces';
import { AppState } from '../../../store/app.state';
import { HomeCategoryCardComponent } from '../../components/home-category-card/home-category-card.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCategoryCardComponent, CommonModule, RouterModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {

  recommendedProducts$!: Observable<ProductListItem[]>;
  hotDealProducts$!: Observable<ProductListItem[]>;
  categories$!: Observable<ProductCategory[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.recommendedProducts$ = this.store.select(state => state.products.recommendedProducts);
    this.hotDealProducts$ = this.store.select(state => state.products.hotDealProducts).pipe(tap(() => {
      let splide = new Splide(".splide", {
        type: "slide",
        focus: 0,
        gap: "1rem",
        perPage: 4,
        breakpoints: {
          640: {
            perPage: 2,
          },
          480: {
            perPage: 1,
          },
        },
      });

      setTimeout(() => splide.mount());
    }));
    this.categories$ = this.store.select(state => state.products.categories);
  }

  get headerImage() {
    return window.innerWidth < 1300 ? "./assets/images/header_image.jpg" : "./assets/images/header_image_big.jpg"
  }

  ngOnInit(): void {
    this.store.dispatch(loadCategories());
    this.store.dispatch(loadHotDealProducts());
    this.store.dispatch(loadRecommendedProducts({}));
  }

  goToProductsList() {
    this.router.navigate(['/all-products']);
  }
}
