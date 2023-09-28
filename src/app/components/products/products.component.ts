import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  productName!: string;

  products = ['A Book', 'A Tree'];

  isDisabled = true;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct(form: any) {
    //this.products.push(this.productName);
    console.log(form);
    if (form.valid) {
      this.products.push(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter((p) => p != productName);
    console.log(this.products);
  }
}
