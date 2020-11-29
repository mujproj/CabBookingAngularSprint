import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private service:CustomerService, private route:Router) { }

  customer:Customer | undefined

  ngOnInit(): void {
  }

  addCustomer(form:any){
    let data = form.value;
    this.customer = new Customer(data.username, data.password, data.mobileNumber, data.email);
    let observable:Observable<Customer> = this.service.addCustomer(this.customer);
    observable.subscribe((addCustomer:Customer)=>this.route.navigate(["/customerLogin"]), err => alert(err.message));
  }
}
