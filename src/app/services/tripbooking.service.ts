import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripBooking } from '../models/tripbooking';

@Injectable({
  providedIn: 'root'
})
export class TripbookingService {

  constructor(private client:HttpClient) { }
  baseUrl = "http://localhost:8088/tripbooking"

  addTripBooking(tripbooking:TripBooking){
    const url = this.baseUrl + "/add";
    let observable:Observable<TripBooking> = this.client.post<TripBooking>(url, tripbooking);
    return observable;
  }

  updateTripBooking(tripbooking:TripBooking, id:number){
    const url = this.baseUrl + `/update/${id}`;
    let observable:Observable<TripBooking> = this.client.put<TripBooking>(url, tripbooking);
    return observable;
  }

  deleteTripBooking(id:number){
    const url = this.baseUrl + `/delete/${id}`;
    let resp = this.client.delete(url);
    return resp;
  }

  getCustomerWiseTrips(id:number){
    const url = this.baseUrl + `/retrieve/customerWiseTrips/${id}`;
    let resp = this.client.get(url);
    return resp;
  }

  getCustomerBills(id:number){
    const url = this.baseUrl + `/retrieve/calculateBill/${id}`;
    let resp = this.client.get(url);
    return resp;
  }
}
