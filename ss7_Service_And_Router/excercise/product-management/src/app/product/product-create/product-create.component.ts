import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  message: string = '';
  check: boolean;
  productCreate: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.productCreate = new FormGroup({
      id: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      price: new FormControl("", [Validators.required, Validators.pattern('^\\d+$')]),
      description: new FormControl("", Validators.required)
    })
  }

  onCreate() {
   this.check = this.productService.addNewProduct(this.productCreate.value);
   if (this.check){
   this.productCreate.reset();
   this.message = "Tạo mới thành công";
  }else {
     this.message = "Tạo mới chưa thành công";
   }
  }
}
