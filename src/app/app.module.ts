import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

import {ToastrModule} from "ngx-toastr"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { CategoryDeleteComponent } from './components/category-delete/category-delete.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    FilterPipePipe,
    ProductDetailsComponent,
    ProductAddComponent,
    CategoryAddComponent,
    ProductDeleteComponent,
    CategoryDeleteComponent,
    ProductUpdateComponent,
    CategoryUpdateComponent,
    CategoryListComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
