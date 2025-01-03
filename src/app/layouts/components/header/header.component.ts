import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, type OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, filter, Observable } from 'rxjs';
import { loadCartData } from '../../../modules/cart/store/cart.actions';
import { selectCartItemsCount } from '../../../modules/cart/store/cart.selectors';
import { loadProductsPredictedTexts, searchProducts } from '../../../modules/products/store/products.actions';
import { selectProductsPredictedTexts } from '../../../modules/products/store/products.selectors';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  searchForm = new FormControl('', Validators.required);
  toggleBurgerMenu = false;
  searchFocused = false;
  cartCount$!: Observable<number>;
  predictedTexts$!: Observable<string[]>;

  constructor(private store: Store<AppState>, private cref: ChangeDetectorRef) {
    this.store.dispatch(loadCartData());
    this.cartCount$ = this.store.select(selectCartItemsCount);
    this.predictedTexts$ = this.store.select(selectProductsPredictedTexts);

    this.searchForm.valueChanges.pipe(takeUntilDestroyed(), debounceTime(500), filter(x => !!x)).subscribe((value) => {
      this.store.dispatch(loadProductsPredictedTexts(value as string));
    });
  }

  ngOnInit(): void { }

  search() {
    if (!this.searchForm.value) return;
    this.store.dispatch(searchProducts(this.searchForm.value));
  }

  toggleMenu() {
    this.toggleBurgerMenu = !this.toggleBurgerMenu;
  }

  closeMenu() {
    this.toggleBurgerMenu = false;
  }

  populateText(text: string) {
    this.searchForm.setValue(text);
    this.closeMenu();
    this.search();
  }

  inputFocusChanged(focused: boolean) {
    setTimeout(() => {
      this.searchFocused = focused;
      this.cref.detectChanges();
    }, 200);
  }

}
