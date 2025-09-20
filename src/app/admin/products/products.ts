import { Component } from '@angular/core';
import {ProductService} from '../../service/products/product.service';
import {productDataI} from '../../models';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  data: productDataI[] = []
  showCreate: boolean = false

  constructor(private service: ProductService) {
    this.allProducts()
  }

  allProducts() {
    this.service.getProducts().subscribe((data) => {
      this.data = data.data
      console.log(this.data)
    })
  }

  createProduct() {
    this.showCreate = true
  }

  savechanges(data: any[]) {

    this.service.createProducts(data).subscribe(
      data => {
        console.log(data)

      }
    )
  }
}
