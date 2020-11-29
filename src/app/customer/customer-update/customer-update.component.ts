import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  constructor(private service:CustomerService, private route:Router) { }
  customer:Customer | undefined

  ngOnInit(): void {
  }

  updateCustomer(form:any){
    let data = form.value;
    this.customer = new Customer(data.username, data.password, data.mobileNumber, data.email);
    let observable:Observable<Customer> = this.service.updateCustomer(this.customer, data.id);
    observable.subscribe((updatedCustomer:Customer)=>this.route.navigate(["/customerLogin"]), err=>alert("No Customer With This Id Exists"));
  }
}
