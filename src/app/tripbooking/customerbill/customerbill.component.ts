import { Component, OnInit } from '@angular/core';
import { TripbookingService } from 'src/app/services/tripbooking.service';

@Component({
  selector: 'app-customerbill',
  templateUrl: './customerbill.component.html',
  styleUrls: ['./customerbill.component.css']
})
export class CustomerbillComponent implements OnInit {

  constructor(private service:TripbookingService) { }

  id:any;
  bill:any;
  ngOnInit(): void {
  }

  customerBill(id:number){
    let resp = this.service.getCustomerBills(id);
    resp.subscribe((data)=>this.bill = data, err=>alert("There is no customer bill for the matching customer id"));
  }
}
