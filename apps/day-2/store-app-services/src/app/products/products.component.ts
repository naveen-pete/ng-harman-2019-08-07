import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) {

  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  ngOnDestroy() { }

  // onProductCreated(product: Product) {
  //   // const service = new LoggerService();
  //   this.loggerService.log('Parent: New product added to the array');

  //   this.products.unshift(product);
  // }
}
