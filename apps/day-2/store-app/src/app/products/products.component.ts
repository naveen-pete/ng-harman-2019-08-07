import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
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

  onProductCreated(product: Product) {
    this.products.unshift(product);
  }
}
