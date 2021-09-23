import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  categoryUpdateForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createcategoryUpdateForm();
  }

  createcategoryUpdateForm(){
    this.categoryUpdateForm=this.formBuilder.group({
      categoryId:["",Validators.required],
      categoryName:["",Validators.required] 
      })
    
    }
    update(){
      if(this.categoryUpdateForm.valid){
      let categoryUpdateModel= Object.assign({},this.categoryUpdateForm.value)
      this.categoryService.update(categoryUpdateModel).subscribe(response=>{
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
