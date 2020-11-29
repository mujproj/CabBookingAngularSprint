import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-validate',
  templateUrl: './customer-validate.component.html',
  styleUrls: ['./customer-validate.component.css']
})
export class CustomerValidateComponent implements OnInit {

  constructor(private service:CustomerService, private route:Router) { }

  customer:Customer | undefined
  ngOnInit(): void {
  }

  sendData(customer:any){
    this.route.navigate(['/afterLogin']);
    this.service.getDataFromForm(customer);
  }
  validateCustomer(form:any){
    let data = form.value;
    let observable:Observable<Customer> = this.service.validateCustomer(data.username, data.password);
    observable.subscribe((retrieveCustomer:any)=>this.sendData(retrieveCustomer), err=>alert("Wrong Username Or Password"));
  }
}
