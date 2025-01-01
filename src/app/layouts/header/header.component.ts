import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { loadCartItems } from '../../modules/cart/store/cart.actions';
import { selectCartItemsCount } from '../../modules/cart/store/cart.selectors';
import { searchProducts } from '../../modules/products/store/products.actions';
import { AppState } from '../../store/app.state';

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
  searchValueChange$ = new Subject<void>();
  toggleBurgerMenu = false;
  searchFocused = false;
  cartCount$!: Observable<number>;
  predictedTexts = [];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadCartItems());
    this.cartCount$ = this.store.select(selectCartItemsCount);
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

  inputChanged() {
    this.searchValueChange$.next();
  }

  inputFocusChanged(focused: boolean) {
    setTimeout(() => {
      this.searchFocused = focused;
    }, 1000);
  }

}
