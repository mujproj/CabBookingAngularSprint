import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
import { AdminValidateComponent } from './admin/admin-validate/admin-validate.component';
import { CabAddComponent } from './cab/cab-add/cab-add.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';
import { CustomerValidateComponent } from './customer/customer-validate/customer-validate.component';
import { BestDriverComponent } from './driver/best-driver/best-driver.component';
import { DriverAddComponent } from './driver/driver-add/driver-add.component';
import { DriverUpdateComponent } from './driver/driver-update/driver-update.component';
import { DriverValidateComponent } from './driver/driver-validate/driver-validate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'customerRegistration', component:CustomerAddComponent },
  {path: 'adminRegistration', component:AdminAddComponent},
  {path: 'addCabs', component:CabAddComponent},
  {path: 'driverRegister', component:DriverAddComponent},
  {path: 'customerLogin', component:CustomerValidateComponent},
  {path: 'adminLogin', component:AdminValidateComponent},
  {path: 'driverLogin', component:DriverValidateComponent},
  {path: 'updateCustomer', component:CustomerUpdateComponent},
  {path: 'updateAdmin', component:AdminUpdateComponent},
  {path: 'updateDriver', component:DriverUpdateComponent},
  {path: 'allCustomers', component:CustomerDeleteComponent},
  {path: 'bestDrivers', component:BestDriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
