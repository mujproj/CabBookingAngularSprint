import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  admin:Admin | undefined
  constructor(private service:AdminService) { }

  ngOnInit(): void {
  }

  updateAdmin(form:any){
    let data = form.value;
    this.admin = new Admin(data.username, data.password, data.mobileNumber, data.email);
    let observable:Observable<Admin> = this.service.updateAdmin(this.admin, data.id);
    observable.subscribe((updatedAdmin:Admin)=>console.log(updatedAdmin), err=>console.log("err is "+err));
  }
}
