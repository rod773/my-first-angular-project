import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName!: string;
  isDisabled = true;
  products = ['A Book', 'A Tree'];
  private productsSubscription!: Subscription;

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(
      () => {
        this.products = this.productsService.getProducts();
      }
    );
  }

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct(form: any) {
    //this.products.push(this.productName);
    console.log(form);
    if (form.valid) {
      //this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter((p) => p != productName);
    console.log(this.products);
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
