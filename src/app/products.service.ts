import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = ['A Book'];
  productsUpdated = new Subject();

  constructor() {}

  addProduct(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next(this.products);
  }

  getProducts() {
    return [...this.products];
  }
}
