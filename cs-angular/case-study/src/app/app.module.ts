import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {HomeComponent} from './home/home.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { FacilityCreateComponent } from './facility-create/facility-create.component';
import { FacilityEditComponent } from './facility-edit/facility-edit.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FacilityListComponent,
    HomeComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerListComponent,
    ContractListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    ContractCreateComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
