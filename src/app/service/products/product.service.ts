import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {productResponse} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl='https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts'
  constructor(private http:HttpClient) { }

getProducts():Observable<productResponse>{
    return this.http.get<productResponse>(this.productUrl);
}
createProducts(data:any[]):Observable<productResponse>{
    return this.http.post<productResponse>(this.productUrl,data)
}
}
