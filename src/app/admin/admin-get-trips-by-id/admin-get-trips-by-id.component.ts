import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-get-trips-by-id',
  templateUrl: './admin-get-trips-by-id.component.html',
  styleUrls: ['./admin-get-trips-by-id.component.css']
})
export class AdminGetTripsByIdComponent implements OnInit {

  constructor(private service:AdminService) { }

  ngOnInit(): void {
  }

  trips:any
  id:any;

  findTrip(id:number){

    let observable =  this.service.getTripById(id);

    observable.subscribe(
      (dtas) => this.trips = dtas,
      err=>console.log("err is "+err.message)
    );
}
}