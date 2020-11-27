import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-best-driver',
  templateUrl: './best-driver.component.html',
  styleUrls: ['./best-driver.component.css']
})
export class BestDriverComponent implements OnInit {

  constructor(private service:DriverService) { }

  drivers:any;
  ngOnInit(): void {
    let resp = this.service.getBestDrivers();
    resp.subscribe((data:any)=>this.drivers=data);
  }

}
