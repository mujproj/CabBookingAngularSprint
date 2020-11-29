import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cab } from 'src/app/models/cab';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-add',
  templateUrl: './driver-add.component.html',
  styleUrls: ['./driver-add.component.css']
})
export class DriverAddComponent implements OnInit {

  constructor(private service:DriverService, private route:Router) { }

  driver:Driver | undefined
  cab:Cab | any
  ngOnInit(): void {
  }

  addDriver(form:any){
    let data = form.value;
    this.cab = new Cab(data.carType, 0);
    this.driver = new Driver(data.username, data.password, data.mobileNumber, data.email, data.licenseNo, this.cab, 0);
    let observable:Observable<Driver> = this.service.addDriver(this.driver);
    observable.subscribe((addDriver:Driver)=>this.route.navigate(["/driverLogin"]), err => alert(err.message));
  }
}
