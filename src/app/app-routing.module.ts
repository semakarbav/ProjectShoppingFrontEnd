import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { CategoryDeleteComponent } from './components/category-delete/category-delete.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"categories",component:CategoryComponent},
  {path:"products/category/:categoryId",component:ProductComponent},
  { path:"product-detail/:productId", component:ProductDetailsComponent},
  {path:"products/add",component:ProductAddComponent},
  {path:"products/update",component:ProductUpdateComponent},
  {path:"categories/add",component:CategoryAddComponent},
  {path:"products/delete",component:ProductDeleteComponent},
  {path:"categories/delete",component:CategoryDeleteComponent},
  {path:"categories/update",component:CategoryUpdateComponent},
  {path:"categories/getall",component:CategoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
