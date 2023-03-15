import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {CategoryCreateComponent} from "./category/category-create/category-create.component";
import {CategoryDeleteComponent} from "./category/category-delete/category-delete.component";
import {CategoryEditComponent} from "./category/category-edit/category-edit.component";



const routes: Routes = [
  {
    path: "product",
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: "categories",
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
