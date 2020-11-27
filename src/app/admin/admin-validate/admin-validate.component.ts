import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-validate',
  templateUrl: './admin-validate.component.html',
  styleUrls: ['./admin-validate.component.css']
})
export class AdminValidateComponent implements OnInit {

  constructor(private service:AdminService) { }

  admin:Admin | undefined
  ngOnInit(): void {
  }

  validateAdmin(form:any){
    let data = form.value;
    let observable:Observable<Admin> = this.service.validateAdmin(data.username, data.password);
    observable.subscribe((retrieveAdmin:Admin)=>console.log(retrieveAdmin), err=>console.log("Error iss "+err));
  }

}
