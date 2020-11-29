import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-after-admin-login',
  templateUrl: './after-admin-login.component.html',
  styleUrls: ['./after-admin-login.component.css']
})
export class AfterAdminLoginComponent implements OnInit {

  constructor(private service:AdminService, private route:Router) { }

  admin:any;
  ngOnInit(): void {
    this.admin = this.service.retrieveData();
  }

  goToUpdate(){
    this.route.navigate(["/updateAdmin"]);
  }

  goToBestDrivers(){
    this.route.navigate(["/bestDrivers"]);
  }

  goToCustomerIdTrip(){
    this.route.navigate(["/retrieveTripsById"]);
  }

  viewYourBill(){
    this.route.navigate(["/customerTripBill"]);
  }

  viewTripCabWise(){
    this.route.navigate(["/retrieveTripsCabwise"])
  }

  viewTripDateWise(){
    this.route.navigate(["/retrieveTripsDateWise"]);
  }

  viewTripCustomerWise(){
    this.route.navigate(["/retrieveTripsCustomerWise"]);
  }

  viewAllCustomers(){
    this.route.navigate(["/allCustomers"]);
  }

  BookATrip(){
    this.route.navigate(["/addTripBooking"]);
  }
}
