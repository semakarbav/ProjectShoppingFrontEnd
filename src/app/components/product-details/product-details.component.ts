import { Category } from './../../models/category';
import { ProductDetail } from './../../models/productDetail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from 'src/app/services/product-detail.service';
import { Product } from 'src/app/models/product';
import { ProductImage } from 'src/app/models/productImage';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  
  productdetails:ProductDetail;
  images:ProductImage[];
  
  dataLoaded=false;

  constructor(private activatedRoute: ActivatedRoute,private productDetailService:ProductDetailService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{

      if(params["productId"]){
       
        this.getProductsDetail(params["productId"])
      }
      else{
        //
      }
    })
   
  }

  getProductsDetail(productId:number){
    this.productDetailService.getProductDetail(productId).subscribe(response=>{
      this.productdetails=response.data
      console.log(response.data)
      this.images = this.productdetails.imagePath
      
      this.dataLoaded=true;
      
    })

}
  

}
