import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIUrls } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addCart(productId: string): Observable<any> {
    const product = { productId: productId };
    return this.http.post(APIUrls.manageCart, product);
  }

  getCart(): Observable<any> {
    return this.http.get(APIUrls.manageCart);
  }

  deleteCart(data: {productId: string, mode: string}): Observable<any> {
    const product = { productId: data.productId, type: data.mode };
    return this.http.post(APIUrls.deleteCart, product);
  }
}
