import { Component, OnInit } from '@angular/core';
import { TripbookingService } from 'src/app/services/tripbooking.service';

@Component({
  selector: 'app-customerwise',
  templateUrl: './customerwise.component.html',
  styleUrls: ['./customerwise.component.css']
})
export class CustomerwiseComponent implements OnInit {

  constructor(private service:TripbookingService) { }

  bool:boolean = false;
  id:any;
  tripBookings:any;
  ngOnInit(): void {
  }

  customerWiseTripBookings(id:number){
    let resp = this.service.getCustomerWiseTrips(id);
    resp.subscribe((data)=>this.tripBookings = data, err=>alert("There is no item with this customer Id"));
  }
}
