import { Injectable } from '@angular/core';
import { Product } from './products';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor() {}

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
}
