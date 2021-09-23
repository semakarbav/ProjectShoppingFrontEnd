import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private productService:ProductService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      productName:["",Validators.required],
      price:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]  
      })
  }
  add(){
    if(this.productAddForm.valid){
    let productModel= Object.assign({},this.productAddForm.value)
    this.productService.add(productModel).subscribe(response=>{
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
