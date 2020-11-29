import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  driver:any;
  constructor(private client:HttpClient) { }
  baseUrl = "http://localhost:8088/driver"

  addDriver(driver:Driver):Observable<Driver>{
    const url = this.baseUrl + "/add";
    let observable:Observable<Driver> = this.client.post<Driver>(url,driver);
    return observable;
  }

  validateDriver(username:string, password:string){
    const url = this.baseUrl + `/validateDriver/${username}/${password}`
    let observable:Observable<Driver> = this.client.get<Driver>(url);
    return observable;
  }

  updateDriver(driver:Driver, id:any):Observable<Driver>{
    let driverId = id;
    const url = this.baseUrl + "/update/" + driverId;
    let observable:Observable<Driver> = this.client.put<Driver>(url, driver);
    return observable;
  }

  getDriverById(id:number):Observable<Driver>{
    const url = this.baseUrl + "/retrieve" + id;
    let observable:Observable<Driver> = this.client.get<Driver>(url);
    return observable;
  }

  getBestDrivers(){
    const url = this.baseUrl + "/retrieve/viewBestDrivers";
    let bestDrivers = this.client.get(url);
    return bestDrivers;
  }

  getDriver(){
    return this.driver;
  }
  sendData(driver:any){
    this.driver = driver;
  }
}
