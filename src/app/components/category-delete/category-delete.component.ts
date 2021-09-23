import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  categoryDeleteForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private categoryService:CategoryService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createcategoryDeleteForm();
  }
  createcategoryDeleteForm(){
    this.categoryDeleteForm=this.formBuilder.group({
      categoryId:["",Validators.required],
       
      })
  }
  delete(){
    if(this.categoryDeleteForm.valid){
    let categoryModel= Object.assign({},this.categoryDeleteForm.value)
    this.categoryService.delete(categoryModel).subscribe(response=>{
      this.toastrService.success(response.message)
    }
    ,responseError=>{
      this.toastrService.error(responseError)
    })
    
  }
  else{
    this.toastrService.error("Lütfen kategori id giriniz")
  }
  }


}
