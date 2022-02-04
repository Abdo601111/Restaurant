import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
      data => {
        this.categories = data
      }
    )
  }

}


