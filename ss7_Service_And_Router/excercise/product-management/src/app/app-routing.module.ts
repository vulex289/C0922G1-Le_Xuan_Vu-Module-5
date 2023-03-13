import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";


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
  {path: "product/edit/:id", component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
