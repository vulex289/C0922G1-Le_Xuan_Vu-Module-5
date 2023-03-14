import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  message: string = '';
  categories: Category[] = [];
  productCreate: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.productCreate = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", Validators.required),
      price: new FormControl("", [Validators.required, Validators.pattern('^\\d+$')]),
      description: new FormControl("", Validators.required),
      category: new FormControl(this.categories)
    })
  }

  getCategories() {
    this.categoryService.getAll().subscribe(category => {
      this.categories = category;
    })
  }

  onCreate() {
    this.productService.addNewProduct(this.productCreate.value).subscribe(() => {
      this.productCreate.reset();
      this.message = "Tạo mới thành công";
    });

    this.productCreate.reset();
    this.message = "Tạo mới thành công";
  }
}
