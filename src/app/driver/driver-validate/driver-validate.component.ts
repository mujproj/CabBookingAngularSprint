import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-validate',
  templateUrl: './driver-validate.component.html',
  styleUrls: ['./driver-validate.component.css']
})
export class DriverValidateComponent implements OnInit {

  constructor(private service:DriverService) { }

  driver:Driver | undefined
  ngOnInit(): void {
  }

  validateDriver(form:any){
    let data = form.value;
    let observable:Observable<Driver> = this.service.validateDriver(data.username, data.password);
    observable.subscribe((retreivedDriver)=>console.log(retreivedDriver), err=>console.log("error is "+err));
  }

}
