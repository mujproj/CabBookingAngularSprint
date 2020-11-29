import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  admin:Admin | undefined
  constructor(private service:AdminService, private route:Router) { }

  ngOnInit(): void {
  }

  addAdmin(form:any){
    let data = form.value;
    this.admin = new Admin(data.username, data.password, data.mobileNumber, data.email);
    let observable:Observable<Admin> = this.service.addAdmin(this.admin);
    observable.subscribe((addAdmin:Admin)=>this.route.navigate(["/adminLogin"]), err => alert(err.message));
  }
}
