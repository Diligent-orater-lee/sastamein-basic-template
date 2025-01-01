import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { APIUrls } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductTextPrediction(text: string) {
    return this.http.get<string[]>(APIUrls.getProductTextPrediction(text)).pipe(map(res => ({result: res})));;
  }

}
