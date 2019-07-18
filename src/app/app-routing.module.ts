import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {CategoryDetailsComponent} from './category-details/category-details.component';

const routes: Routes = [
  {path: 'categories', component: CategoryComponent},
  {path: 'category/:id', component: CategoryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
