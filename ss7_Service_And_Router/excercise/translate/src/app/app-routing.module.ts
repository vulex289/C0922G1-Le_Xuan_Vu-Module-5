import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from "./dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";


const routes: Routes = [
  {path:'',component: DictionaryPageComponent,
    children: [{
    path:':word',component: DictionaryDetailComponent
    }]
  },
  // cách 2:
  // {path: '', component: DictionaryPageComponent},
  // {path: 'dictionary/detail/:word', component: DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
