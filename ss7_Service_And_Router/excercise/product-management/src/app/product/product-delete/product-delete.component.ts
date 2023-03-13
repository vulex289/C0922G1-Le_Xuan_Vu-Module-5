import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../model/i-product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  message: string = '';
  check: boolean;
  product: IProduct = null;
  productDelete: FormGroup;
   id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.product = this.productService.getProductDetail(this.id);
      this.productDelete = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description)
      })
    })

  }

  onDelete() {
    this.productService.deleteProduct(this.id);
    // this.router.navigateByUrl('./delete/2');
    this.router.navigate(['delete','2']);
  }

  onBackPage() {
    this.router.navigate(["../../../"], {relativeTo: this.activatedRoute});
    // this.router.navigateByUrl("../../");
  }


}
