import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  productName = 'A Book';

  isDisabled = false;

  constructor() {
    setTimeout(() => {
      this.productName = 'A Car';
    }, 3000);
  }
}
