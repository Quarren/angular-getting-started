import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor() {}

  // ajouter un produit au panier
  addToCart(product: Product) {
    this.items.push(product);
  }

  // getter
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
