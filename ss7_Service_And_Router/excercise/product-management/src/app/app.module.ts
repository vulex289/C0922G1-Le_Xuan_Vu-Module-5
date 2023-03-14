import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryListComponent} from './category/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductEditComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryEditComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
