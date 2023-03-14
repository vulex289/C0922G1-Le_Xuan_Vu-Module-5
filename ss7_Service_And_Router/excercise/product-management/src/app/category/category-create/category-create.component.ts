import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryCreate: FormGroup;

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.categoryCreate = new FormGroup({
      id: new FormControl(),
      nameCategory: new FormControl("",[Validators.required])
    })
  }

  onCreate() {
    this.categoryService.saveCategory(this.categoryCreate.value).subscribe(()=>{
    this.categoryCreate.reset();
    // this.router.navigateByUrl('')
    },error => {
      console.log(error);
    });
  }
}
