import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from "app/model/product";

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
  
  constructor() { }

  ngOnInit() {
  }

}
