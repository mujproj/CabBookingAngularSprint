import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-trip-cab-wise',
  templateUrl: './get-trip-cab-wise.component.html',
  styleUrls: ['./get-trip-cab-wise.component.css']
})
export class GetTripCabWiseComponent implements OnInit {

  constructor(private service:AdminService) { }

  tripBookings:any;
  ngOnInit(): void {
    let resp = this.service.getTripCabWise();
    resp.subscribe((data)=>this.tripBookings = data, err=>alert("No Trips Based On Cab"));
  }


}
