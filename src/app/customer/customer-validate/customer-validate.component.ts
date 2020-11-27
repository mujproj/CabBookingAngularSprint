import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-validate',
  templateUrl: './customer-validate.component.html',
  styleUrls: ['./customer-validate.component.css']
})
export class CustomerValidateComponent implements OnInit {

  constructor(private service:CustomerService) { }

  customer:Customer | undefined
  ngOnInit(): void {
  }

  validateCustomer(form:any){
    let data = form.value;
    let observable:Observable<Customer> = this.service.validateCustomer(data.username, data.password);
    observable.subscribe((retrieveCustomer:Customer)=>console.log(retrieveCustomer), err=>console.log("Error is" + err.message));
  }
}
