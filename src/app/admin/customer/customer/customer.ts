import { Component } from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import { getCustomerDataI, postCustomerDataI} from '../../../models';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-customer',
  imports: [CommonModule,FormsModule,MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  data:getCustomerDataI[]=[]
  showCreate: boolean = false;

  payload:postCustomerDataI={
    "CustId": 0,
    "Name": "",
    "MobileNo": "",
    "Password": ""
  }
  constructor(private service:CustomerService) {
    this.allCustomers()
  }
allCustomers(){
    this.service.getCustomers().subscribe((
      data=>
      {
        this.data=data.data
        console.log(this.data)
      }
    ))
}
saveCustomer(){
  console.log(this.payload)
    this.service.createCustomer(this.payload).subscribe(
      (response:any)=> {
        console.log(response)
        alert("Customer Created Successfully")
      }
    )
}

  createProduct() {
    this.showCreate = true
  }

  Delete(id:number) {
    console.log('id',id)
  }
}
