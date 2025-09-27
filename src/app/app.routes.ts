import { Routes } from '@angular/router';
import {Products} from './admin/products/products';
import {Category} from './admin/category/category';
import {Customer} from './admin/customer/customer/customer';

export const routes: Routes = [
  {path:'products',component:Products},
  {path:'category',component:Category},
  {path:'customer',component:Customer},
];
