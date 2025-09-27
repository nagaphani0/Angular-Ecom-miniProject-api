import { Component } from '@angular/core';
import {catDataI, productDataI} from '../../models';
import {ProductService} from '../../service/products/product.service';
import {CategoryService} from '../../service/category/category.service';
import {CommonModule} from '@angular/common';



@Component({
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class Category {
  data: catDataI[] = []
  showCreate: boolean = false

  constructor(private service: CategoryService) {
    this.allProducts()
  }

  allProducts() {
    this.service.getCategory().subscribe((data) => {
      this.data = data.data
      console.log(this.data)
    })
  }

  createProduct() {
    this.showCreate = true
  }

  savechanges(data: any[]) {

    this.service.createCategory(data).subscribe(
      data => {
        console.log(data)

      }
    )
  }
}
