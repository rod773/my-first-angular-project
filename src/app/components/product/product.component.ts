import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() productName!: string;
  @Output() productClicked = new EventEmitter<boolean>();

  constructor(private productsService: ProductsService) {}

  onClicked() {
    this.productsService.deleteProduct(this.productName);
  }
}
