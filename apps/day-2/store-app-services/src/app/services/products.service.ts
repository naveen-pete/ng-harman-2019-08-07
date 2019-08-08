import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      name: 'Samsung Galaxy S10',
      price: 60000,
      isAvailable: true,
      description: 'Product from Samsung'
    },
    {
      name: 'iPhone X',
      price: 70000,
      isAvailable: false,
      description: 'Product from Apple'
    },
    {
      name: '1 Plus 7',
      price: 40000,
      isAvailable: false,
      description: 'Product from OnePlus'
    }
  ];

  constructor() { }

  getProducts() {
    console.log('ProductsService.getProducts() invoked.')
    return this.products;
  }

  addProduct(product: Product) {
    console.log('ProductsService.addProduct() invoked.')
    this.products.push(product);
  }
}
