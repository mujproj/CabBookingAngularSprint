import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  constructor(private service:CustomerService) { }
  customers:any;

  ngOnInit(): void {
    let resp = this.service.getAllCustomers();
    resp.subscribe((data:any)=>this.customers = data);
  }

  deleteCustomer(id:number){
    let resp = this.service.deleteCustomers(id);
    resp.subscribe((data:any)=>console.log(data));
  }

}
