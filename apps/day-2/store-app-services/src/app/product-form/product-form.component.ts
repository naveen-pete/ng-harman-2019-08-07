import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  // @Output() productCreated = new EventEmitter<Product>();
  product: Product = new Product();
  showMessage = false;

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) { }

  onSave() {
    // this.productCreated.emit(this.product);
    this.productsService.addProduct(this.product);
    this.product = new Product();
    this.showMessage = true;

    this.loggerService.log('Form: New product created');

    setTimeout(() => {
      this.showMessage = false;
    }, 4000);


  }
}
