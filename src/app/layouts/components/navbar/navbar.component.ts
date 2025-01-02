import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logoutAction } from '../../../modules/auth/store/auth.actions';
import { isLoggedInSelector } from '../../../modules/auth/store/auth.selectors';
import { loadCategoryWithSubProductsDto } from '../../../modules/products/store/products.actions';
import { categoryWithSubProductsSelector } from '../../../modules/products/store/products.selectors';
import { CategoryWithSubProductsDto } from '../../../shared/interfaces';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent implements OnInit {

  toggleBurgerMenu = false;
  activeCategory = 0;

  categoryItems$!: Observable<CategoryWithSubProductsDto[]>;
  isLogin$!: Observable<boolean>;

  constructor(private store: Store) {
    this.isLogin$ = this.store.select(isLoggedInSelector);
    this.categoryItems$ = this.store.select(categoryWithSubProductsSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCategoryWithSubProductsDto());
  }

  isActiveCategory(i: number) {
    return this.activeCategory === i;
  }

  toggleMenu() {
    this.toggleBurgerMenu = !this.toggleBurgerMenu;
  }

  logout() {
    this.store.dispatch(logoutAction());
  }
}
