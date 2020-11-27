import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private client:HttpClient) { }
  baseUrl = "http://localhost:8088/admin"

  addAdmin(admin:Admin):Observable<Admin>{
    const url = this.baseUrl + "/add";
    let observable:Observable<Admin> = this.client.post<Admin>(url,admin);
    return observable;
  }

  validateAdmin(username:string, password:string):Observable<Admin>{
    const url = this.baseUrl +  `/validateAdmin/${username}/${password}`;
    let observable:Observable<Admin> = this.client.get<Admin>(url);
    return observable;
  }

  updateAdmin(admin:Admin, id:any):Observable<Admin>{
    let adminId = id;
    const url = this.baseUrl + "/update/" + adminId;
    let observable:Observable<Admin> = this.client.put<Admin>(url, admin);
    return observable;
  }

  getTripById(id:number){
    const url = this.baseUrl + `/retrieve/tripsBooking/${id}`;
    let trips = this.client.get(url);
    return trips;
  }

  getTripCabWise(){
    const url = this.baseUrl + "/retrieve/getCabWise";
    let trips = this.client.get(url);
    return trips;
  }

  getTripCustomerWise(){
    const url = this.baseUrl + "/retrieve/getTripsCustomerwise";
    let trips = this.client.get(url);
    return trips;
  }

  getTripsDateWise(){
    const url = this.baseUrl + "/retrieve/getTripsDatewise";
    let trips = this.client.get(url);
    return trips;
  }

  getAllTripsForDays(id:number, fromDate:string, toDate:string){
    const url = this.baseUrl + `/retrieve/getAllTripsForDays/${id}/${fromDate}/${toDate}`;
    let trips = this.client.get(url);
    return trips;
  }
}
