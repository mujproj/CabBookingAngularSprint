import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private client:HttpClient) { }
  baseUrl = "http://localhost:8088/customer"

  customer:Customer | undefined;

  addCustomer(customer:Customer):Observable<Customer>{
    const url = this.baseUrl + "/add";
    let observable:Observable<Customer> = this.client.post<Customer>(url,customer);
    return observable;
  }

  validateCustomer(username:string, password:string):Observable<Customer>{
    const url = this.baseUrl + `/retrieve/validateCustomer/${username}/${password}`;
    let observable:Observable<Customer> = this.client.get<Customer>(url);
    return observable;
  }

  updateCustomer(customer:Customer, id:any):Observable<Customer>{
    let custId = id;
    const url = this.baseUrl + "/update/" + custId;
    let observable:Observable<Customer> = this.client.put<Customer>(url, customer);
    return observable;
  }

  getAllCustomers(){
    const url = this.baseUrl + "/retrieve/allCustomers";
    let customers = this.client.get(url);
    return customers;
  }

  deleteCustomers(id:number){
    const url = this.baseUrl + `/delete/${id}`;
    let deletedCustomer = this.client.delete(url);
    return deletedCustomer;
  }

  getCustomerById(id:number){
    const url = this.baseUrl + `/retrieve/${id}`;
    let observable:Observable<Customer> = this.client.get<Customer>(url);
    return observable;
  }

  getDataFromForm(customer:Customer){
    this.customer = customer;
  }

  sendDataToAfterLogin(){
    return this.customer;
  }
}
