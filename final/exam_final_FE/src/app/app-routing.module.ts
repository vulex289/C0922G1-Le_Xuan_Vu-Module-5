import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AbcComponent} from './abc/abc.component';
import {CarListComponent} from './car-list/car-list.component';
import {CarEditComponent} from './car-edit/car-edit.component';
import {CarCreateComponent} from './car-create/car-create.component';


const routes: Routes = [
  {
    path: '', component: CarListComponent
  },
  {
    path: 'cars/create', component: CarCreateComponent
  },
  {
    path: 'cars/edit/:id', component: CarEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
