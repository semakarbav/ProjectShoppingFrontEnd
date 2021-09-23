import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productUpdateForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private productService:ProductService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createproductUpdateForm()
  }
  createproductUpdateForm(){
    this.productUpdateForm=this.formBuilder.group({
      productId:["",Validators.required],
      productName:["",Validators.required],
      price:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]  
      })
    
    }
    update(){
      if(this.productUpdateForm.valid){
      let productUpdateModel= Object.assign({},this.productUpdateForm.value)
      this.productService.update(productUpdateModel).subscribe(response=>{
        this.toastrService.success(response.message)
      },responseError=>{
        this.toastrService.error(responseError)
      })
      
    }
    else{
      this.toastrService.error("Form eksik ya da hatalı")
    }
    }
}
