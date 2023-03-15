import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {CategoryDeleteComponent} from "./category-delete/category-delete.component";
import {CategoryEditComponent} from "./category-edit/category-edit.component";


const routes: Routes = [
  {path: "", component: CategoryListComponent},
  {path: "categories/create", component: CategoryCreateComponent},
  {path: "categories/delete/:id", component: CategoryDeleteComponent},
  {path: "categories/edit/:id", component: CategoryEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
