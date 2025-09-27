import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {productResponse} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  catUrl='https://freeapi.miniprojectideas.com/api/amazon/GetAllCategory'
  constructor(private http:HttpClient) { }

  getCategory():Observable<productResponse>{
    return this.http.get<productResponse>(this.catUrl);
  }
  createCategory(data:any[]):Observable<productResponse>{
    return this.http.post<productResponse>(this.catUrl,data)
  }
}
