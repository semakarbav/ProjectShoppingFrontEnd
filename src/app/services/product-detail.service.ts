import { SingleResponseModel } from './../models/singleResponseModel';
import { ProductDetail } from './../models/productDetail';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  apiUrl="https://localhost:44350/api/";
  constructor(private httpClient:HttpClient) { }

  
  getProductDetail(productId: number): Observable<SingleResponseModel<ProductDetail>> {
    let newPath = this.apiUrl + "products/getproductdetails?productId=" + productId;
    return this.httpClient.get<SingleResponseModel<ProductDetail>>(newPath);
  }
}
