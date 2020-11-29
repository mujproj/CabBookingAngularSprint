import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-validate',
  templateUrl: './driver-validate.component.html',
  styleUrls: ['./driver-validate.component.css']
})
export class DriverValidateComponent implements OnInit {

  constructor(private service:DriverService, private route:Router) { }

  driver:Driver | undefined
  ngOnInit(): void {
  }

  sendData(driver:any){
    this.route.navigate(["/afterDriverLogin"]);
    this.service.sendData(driver);
  }
  validateDriver(form:any){
    let data = form.value;
    let observable:Observable<Driver> = this.service.validateDriver(data.username, data.password);
    observable.subscribe((retreivedDriver)=>this.sendData(retreivedDriver), err=>alert("Username password Mismatch"));
  }

}
