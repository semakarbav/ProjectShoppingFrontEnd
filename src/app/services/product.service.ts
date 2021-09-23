import { SingleResponseModel } from './../models/singleResponseModel';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { ProductDetail } from '../models/productDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44350/api/"
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl+ "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl+ "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
   getProductDetails(productId:number):Observable<ListResponseModel<ProductDetail>>{
     let newPath=this.apiUrl+ "products/getproductdetails?productId="+productId
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
   }
   add(product:Product):Observable<ResponseModel>{
     return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product);
     
   }
   delete(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/delete",product);
    
  }
  update(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/update",product);
    
  }
}
