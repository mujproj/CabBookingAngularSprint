import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  constructor(private service:CustomerService, private route:Router) { }

  customer:any | undefined;
  ngOnInit(): void {
    this.customer = this.service.sendDataToAfterLogin();
  }

  goToBestDrivers(){
    this.route.navigate(["/bestDrivers"]);
  }

  goToCustomerIdTrip(){
    this.route.navigate(["/customerTrips"]);
  }

  viewYourBill(){
    this.route.navigate(["/customerTripBill"]);
  }

  goToUpdatePage(){
    this.route.navigate(["/updateCustomer"]);
  }

  rateDriver(){
    this.route.navigate(["/rateDriver"]);
  }
}
