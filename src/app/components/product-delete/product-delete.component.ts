import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productDeleteForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private productService:ProductService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductDeleteForm();
  }
  createProductDeleteForm(){
    this.productDeleteForm=this.formBuilder.group({
      productId:["",Validators.required],
       
      })
  }
  delete(){
    if(this.productDeleteForm.valid){
    let productModel= Object.assign({},this.productDeleteForm.value)
    this.productService.delete(productModel).subscribe(response=>{
      this.toastrService.success(response.message)
    }
    ,responseError=>{
      this.toastrService.error(responseError)
    })
    
  }
  else{
    this.toastrService.error("Lütfen ürün id giriniz")
  }
  }

}
