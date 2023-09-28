import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() productName!: string;
  @Output() productClicked = new EventEmitter<boolean>();

  onClicked() {
    this.productClicked.emit(true);
    console.log('clicked ' + this.productName);
  }
}
