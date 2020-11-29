import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})
export class DeleteAdminComponent implements OnInit {

  constructor(private service:AdminService) { }

  ngOnInit(): void {
  }

  admin:Admin = new Admin("", "", "", "");
  deleteAdmin(form:any){
    let data = form.value;
    let id = data.adminid;

    console.log(id);

    let val = this.service.deleteAdmin(id);

    val.subscribe((data:any)=>this.admin=data);
  }

}
