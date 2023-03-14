import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../model/category";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  private id: number;
  categoryFormDelete: FormGroup
  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCategory(this.id);
    });
  }

  getCategory(id: number) {
    this.categoryService.findById(id).subscribe((item) => {
      this.categoryFormDelete= new FormGroup({
        id: new FormControl(item.id),
        nameCategory: new FormControl(item.nameCategory)
      })
    })
  }
  // getCategory1(id: number): Observable<Category> {
  //   return this.categoryService.findById(id).pipe(
  //     map((category) => {
  //       this.categoryDelete = new FormGroup({
  //         id: new FormControl(category.id),
  //         nameCategory: new FormControl(category.nameCategory)
  //       });
  //       return category;
  //     })
  //   );
  // }
  onDelete() {
    this.categoryService.deleteCategory(this.id).subscribe(() => {
      this.router.navigateByUrl('/categories/list')
    }, error => {
      console.log(error);
    })
  }
}
