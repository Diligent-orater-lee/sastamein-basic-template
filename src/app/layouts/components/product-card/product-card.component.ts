import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { addToCartAction, toggleWishlistAction } from '../../../modules/cart/store/cart.actions';
import { isProductInWishlist } from '../../../modules/cart/store/cart.selectors';
import { OfferViewTypeEnum } from '../../../shared/enums';
import { ProductListItem } from '../../../shared/interfaces';
import { RatingReviewViewComponent } from '../rating-review-view/rating-review-view.component';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule, CommonModule, RatingReviewViewComponent],
  templateUrl: './product-card.component.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .product-image {
      height: fit-content;
      align-self: center;
    }
  `,
})
export class ProductCardComponent implements OnInit, OnChanges {

  @Input() product!: ProductListItem;
  @Input() showWishlistButton = false;

  offerViewTypeEnum = OfferViewTypeEnum;
  wishListBtn$!: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['product'] && this.product) {
        this.wishListBtn$ = this.store.select(isProductInWishlist(this.product.id));
      }
  }

  ngOnInit(): void {
  }

  addToCart() {
    if (!this.product.stock) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'There is no enough quantity in the stock!',
      });
      return;
    }
    this.store.dispatch(addToCartAction({ productId: this.product.id }));
    Swal.fire({
      icon: 'success',
      title: 'Great!',
      text: 'Product Added To Your Cart Successfully'
    })
  }

  addProductToWishList(e: any) {
    e.stopPropagation();
    this.store.dispatch(toggleWishlistAction({ productId: this.product.id }));
  }
}
