import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDeleteComponent} from "./product-delete/product-delete.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductListComponent} from "./product-list/product-list.component";


const routes: Routes = [
  {
    path: "delete/:id", component: ProductDeleteComponent
  },
  {
    path: "", component: ProductListComponent
  },
  {
    path: "create", component: ProductCreateComponent,
  },
  {path: "edit/:id", component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
