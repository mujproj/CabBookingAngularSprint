import { Component, OnInit } from '@angular/core';
import { Cab } from 'src/app/models/cab';
import { Driver } from 'src/app/models/driver';
import { TripBooking } from 'src/app/models/tripbooking';
import { TripbookingService } from 'src/app/services/tripbooking.service';

@Component({
  selector: 'app-tripbookingadd',
  templateUrl: './tripbookingadd.component.html',
  styleUrls: ['./tripbookingadd.component.css']
})
export class TripbookingaddComponent implements OnInit {

  constructor(private service:TripbookingService) { }
  tripBooking:TripBooking | undefined;
  driver:Driver | undefined;
  cab: Cab | undefined;
  ngOnInit(): void {
  }

  addTripBooking(form:any){
    let data = form.value;
    this.cab = new Cab(data.carType, data.perKmRate);
    this.driver = new Driver(data.username, "", data.mobileNumber, data.email, data.licenseNo, this.cab, 0);
    this.tripBooking = new TripBooking(data.customerId, this.driver , data.fromLocation, data.toLocation, data.fromDateTime, data.toDateTime, true, data.distanceInKm, data.bill);
    let resp = this.service.addTripBooking(this.tripBooking);
    resp.subscribe((data:TripBooking)=>console.log(data), err=>console.log(err));
  }
}
