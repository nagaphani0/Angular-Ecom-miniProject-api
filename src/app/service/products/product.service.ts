import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl='https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts'
  constructor(private http:HttpClient) { }
allProducts():Observable<any>{
    return this.http.get(this.productUrl);
}
}
