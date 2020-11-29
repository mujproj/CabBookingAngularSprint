import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cab } from 'src/app/models/cab';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-update',
  templateUrl: './driver-update.component.html',
  styleUrls: ['./driver-update.component.css']
})
export class DriverUpdateComponent implements OnInit {

  constructor(private service:DriverService, private route:Router) { }
  driver:Driver | undefined;;
  cab:Cab | undefined

  ngOnInit(): void {
  }

  updateDriver(form:any){
    let data = form.value;
    this.cab = new Cab(data.carType, 0);
    this.driver = new Driver(data.username, data.password, data.mobileNumber, data.email, data.licenseNo, this.cab, 0);
    let observable:Observable<Driver> = this.service.updateDriver(this.driver, data.id);
    observable.subscribe((updatedDriver:Driver)=>this.route.navigate(["/driverLogin"]), err=>alert(err.message));
  }
}
