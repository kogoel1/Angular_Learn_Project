import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private httpClient: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
    window.alert('Item is pushed into your cart.');
  }

  getCart() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    window.alert('Item is removed your cart.');
  }

  getShippingPrices(): any {
    return this.httpClient.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
