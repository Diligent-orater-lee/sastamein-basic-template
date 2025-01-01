import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../modules/cart/store/cart.state';
import { APIUrls } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems() {
    return this.http.get<{data: CartItem[]}>(APIUrls.getCartItems);
  }

}
