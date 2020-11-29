import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-validate',
  templateUrl: './admin-validate.component.html',
  styleUrls: ['./admin-validate.component.css']
})
export class AdminValidateComponent implements OnInit {

  constructor(private service:AdminService, private route:Router) { }

  admin:Admin | undefined
  ngOnInit(): void {
  }

  sendData(admin:any){
    this.route.navigate(['/afterAdminLogin']);
    this.service.sendData(admin);
  }
  validateAdmin(form:any){
    let data = form.value;
    let observable:Observable<Admin> = this.service.validateAdmin(data.username, data.password);
    observable.subscribe((retrieveAdmin:any)=>this.sendData(retrieveAdmin), err=>alert("Wrong Username or password"));
  }

}
