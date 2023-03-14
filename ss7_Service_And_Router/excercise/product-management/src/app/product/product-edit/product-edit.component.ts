import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {IProduct} from "../../model/i-product";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

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
  categories: Category[] =[];
  private id: any;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // this.id = +this.activatedRoute.snapshot.params.id;
      this.id = +paramMap.get('id');
      this.productService.getProductDetail(this.id);
      this.getProductEdit(this.id);
    })
    this.getCategory();
  }

  onEdit() {
    this.productService.editProduct(this.id, this.productEdit.value).subscribe(() => {
      this.productEdit.reset();
      this.message = "Sửa thành công";
      this.router.navigateByUrl('');
    });
  }

  getCategory(){
    this.categoryService.getAll().subscribe(category=>{
      this.categories = category;
    })
  }
  getProductEdit(id: number) {
    this.productService.getProductDetail(id).subscribe(item => {
      this.productEdit = new FormGroup({
        id: new FormControl(item.id, Validators.required),
        name: new FormControl(item.name, Validators.required),
        price: new FormControl(item.price, [Validators.required, Validators.pattern('^\\d+$')]),
        description: new FormControl(item.description, Validators.required),
        category: new FormControl(item.category, Validators.nullValidator)
      })
    });
  }
  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
