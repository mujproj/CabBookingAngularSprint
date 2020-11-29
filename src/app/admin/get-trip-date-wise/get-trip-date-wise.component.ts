import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-trip-date-wise',
  templateUrl: './get-trip-date-wise.component.html',
  styleUrls: ['./get-trip-date-wise.component.css']
})
export class GetTripDateWiseComponent implements OnInit {

  constructor(private service:AdminService) { }

  tripBookings:any;
  ngOnInit(): void {
    let resp = this.service.getTripsDateWise();
    resp.subscribe((data)=>this.tripBookings=data, err=>alert("No Record Found DateWise"));
  }

}
