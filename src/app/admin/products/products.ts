import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../../service/products/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  constructor(private service:ProductService) {
    service.allProducts()
  }


}
