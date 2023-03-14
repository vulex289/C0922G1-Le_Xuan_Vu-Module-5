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
      this.getProduct(this.id);
    })
  }

  getProduct(id: number) {
    this.productService.getProductDetail(this.id).subscribe((item => {
      this.productDelete = new FormGroup({
        id: new FormControl(item.id),
        name: new FormControl(item.name),
        price: new FormControl(item.price),
        description: new FormControl(item.description),
        category: new FormControl(item.category.nameCategory),
      })
    }))
  }

  onDelete() {
    this.productService.deleteProduct(this.id).subscribe(()=>{
      console.log(this.id)
      this.router.navigateByUrl('');
    });
    // this.router.navigateByUrl('./delete/2');
    // this.router.navigate(['delete','2']);
  }

  onBackPage() {
    this.router.navigate(["../../../"], {relativeTo: this.activatedRoute});
    // this.router.navigateByUrl("../../");
  }


}
