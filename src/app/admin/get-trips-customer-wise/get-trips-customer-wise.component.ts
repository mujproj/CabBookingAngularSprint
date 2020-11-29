import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-trips-customer-wise',
  templateUrl: './get-trips-customer-wise.component.html',
  styleUrls: ['./get-trips-customer-wise.component.css']
})
export class GetTripsCustomerWiseComponent implements OnInit {

  constructor(private service:AdminService) { }

  tripBookings:any;
  ngOnInit(): void {
    let resp = this.service.getTripCustomerWise();
    resp.subscribe((data)=>this.tripBookings = data, err=>alert("No Record Found Customer Wise"));
  }

}
