import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';
import { Product } from "app/model/product";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  @Input()
  productList: Product[];

  @Output()
  onProductSelected : EventEmitter<Product>;
  
  private currentProduct : Product;
  constructor() { 
    this.onProductSelected=new EventEmitter();

  }
  isSelected(product:Product):Boolean{
    if (!product || !this.currentProduct) {
      return false;
    }
    return this.currentProduct.sku===product.sku;
  }

  clicked(product:Product): void{
    this.currentProduct=product;
    this.onProductSelected.emit(this.currentProduct);
  }

  ngOnInit() {
  }

}
