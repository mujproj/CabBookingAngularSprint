import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-after-driver-login',
  templateUrl: './after-driver-login.component.html',
  styleUrls: ['./after-driver-login.component.css']
})
export class AfterDriverLoginComponent implements OnInit {

  constructor(private service:DriverService, private route:Router) { }

  driver:any;
  ngOnInit(): void {
    this.driver = this.service.getDriver();
  }

  updateDriver(){
    this.route.navigate(["/updateDriver"]);
  }

  bestDrivers(){
    this.route.navigate(["/bestDrivers"]);
  }

}
