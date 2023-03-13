import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {IProduct} from "../../model/i-product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll= (): void => {
    this.products = this.productService.getAll();
  }
}
