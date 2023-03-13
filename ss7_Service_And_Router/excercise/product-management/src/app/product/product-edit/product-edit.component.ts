import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {IProduct} from "../../model/i-product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  message: string = '';
  check: boolean;
  product: IProduct = null;
  products: IProduct[] = [];
  productEdit: FormGroup;
  private id: any;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getAll();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
    // this.id = +this.activatedRoute.snapshot.params.id;
      this.id = +paramMap.get('id');
    this.product = this.productService.getProductDetail(this.id);
    this.productEdit = new FormGroup({
      id: new FormControl(this.product.id, Validators.required),
      name: new FormControl(this.product.name, Validators.required),
      price: new FormControl(this.product.price, [Validators.required, Validators.pattern('^\\d+$')]),
      description: new FormControl(this.product.description, Validators.required)
    })
    })
  }

  onEdit() {
    this.productService.editProduct(this.id, this.productEdit.value);
    this.productEdit.reset();
    this.message = "Sửa thành công";
  }
getAll(){
    this.products = this.productService.getAll();
}
}
