import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cab } from '../models/cab';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  constructor(private client:HttpClient) { }
  baseUrl = "http://localhost:8088/cab"
  addCab(cab:Cab):Observable<Cab>{
    const url = this.baseUrl + "/add";
    let observable:Observable<Cab> = this.client.post<Cab>(url,cab);
    return observable;
  }

  getCabByCabType(carType:string){
    const url = this.baseUrl + `/retrieve/cabsOfType/${carType}`;
    let cab = this.client.get(url);
    return cab;
  }

  getCountOfCabType(carType:string){
    const url = this.baseUrl + `/retrieve/countOfCabsType/${carType}`;
    let count = this.client.get(url);
    return count;
  }
}
