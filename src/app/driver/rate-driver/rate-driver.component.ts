import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-rate-driver',
  templateUrl: './rate-driver.component.html',
  styleUrls: ['./rate-driver.component.css']
})
export class RateDriverComponent implements OnInit {

  constructor(private service:DriverService, private route:Router) { }

  driver:any;
  id:any;
  message:any;
  ngOnInit(): void {
    
  }

  getDriver(form:any){
    let data = form.value;
    let resp = this.service.getDriverById(data.id);
    resp.subscribe((data)=>this.updateDriver(data, form), err=>alert(err.message));
  }
  updateDriver(data:any, form:any){
    this.driver = data;
    this.driver.rating = form.value.rating;
    let resp = this.service.updateDriver(this.driver, form.value.id);
    resp.subscribe((data)=>this.message = "Driver Rated Successfully", err=>alert(err.message));
  }
}
