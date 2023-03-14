import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {CategoryCreateComponent} from "./category/category-create/category-create.component";
import {CategoryDeleteComponent} from "./category/category-delete/category-delete.component";
import {CategoryEditComponent} from "./category/category-edit/category-edit.component";



const routes: Routes = [
  {
    path: "", component: ProductListComponent,
  },
  //children: [
  //       {
  //         path: 'delete/:id', component: ProductDeleteComponent
  //       }
  //     ]
  {
    path: "product/delete/:id", component: ProductDeleteComponent
  },
  {
    path: "product/create", component: ProductCreateComponent,
  },
  {path: "product/edit/:id", component: ProductEditComponent},
  {path: "categories/list", component: CategoryListComponent},
  {path: "categories/create", component: CategoryCreateComponent},
  {path: "categories/delete/:id", component: CategoryDeleteComponent},
  {path: "categories/edit/:id", component: CategoryEditComponent}
  // {path: "category", loadChildren : () => CategoryModule}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
