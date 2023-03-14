import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';


const routes: Routes = [{
  path: 'edit/:id', component: TodoEditComponent
},
  {path: '', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
