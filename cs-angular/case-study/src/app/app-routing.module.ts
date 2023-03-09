import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {HomeComponent} from './home/home.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {ContractListComponent} from './contract-list/contract-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'facility', component: FacilityListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customer', component: CustomerListComponent },
  { path: 'customer-create', component: CustomerCreateComponent },
  { path: 'customer-edit', component: CustomerEditComponent },
  { path: 'contract', component: ContractListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
