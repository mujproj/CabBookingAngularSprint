import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminGetTripsByIdComponent } from './admin/admin-get-trips-by-id/admin-get-trips-by-id.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
import { AdminValidateComponent } from './admin/admin-validate/admin-validate.component';
import { AfterAdminLoginComponent } from './admin/after-admin-login/after-admin-login.component';
import { DeleteAdminComponent } from './admin/delete-admin/delete-admin.component';
import { GetTripCabWiseComponent } from './admin/get-trip-cab-wise/get-trip-cab-wise.component';
import { GetTripDateWiseComponent } from './admin/get-trip-date-wise/get-trip-date-wise.component';
import { GetTripsCustomerWiseComponent } from './admin/get-trips-customer-wise/get-trips-customer-wise.component';
import { CabAddComponent } from './cab/cab-add/cab-add.component';
import { AfterLoginComponent } from './customer/after-login/after-login.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';
import { CustomerValidateComponent } from './customer/customer-validate/customer-validate.component';
import { RateDriverComponent } from './driver/rate-driver/rate-driver.component';
import { AfterDriverLoginComponent } from './driver/after-driver-login/after-driver-login.component';
import { BestDriverComponent } from './driver/best-driver/best-driver.component';
import { DriverAddComponent } from './driver/driver-add/driver-add.component';
import { DriverUpdateComponent } from './driver/driver-update/driver-update.component';
import { DriverValidateComponent } from './driver/driver-validate/driver-validate.component';
import { HomeComponent } from './home/home.component';
import { CustomerbillComponent } from './tripbooking/customerbill/customerbill.component';
import { CustomerwiseComponent } from './tripbooking/customerwise/customerwise.component';
import { TripbookingaddComponent } from './tripbooking/tripbookingadd/tripbookingadd.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'customerRegistration', component:CustomerAddComponent },
  {path: 'adminRegistration', component:AdminAddComponent},
  {path: 'addCabs', component:CabAddComponent},
  {path: 'deleteAdmin', component:DeleteAdminComponent},
  {path: 'driverRegister', component:DriverAddComponent},
  {path: 'customerLogin', component:CustomerValidateComponent},
  {path: 'adminLogin', component:AdminValidateComponent},
  {path: 'driverLogin', component:DriverValidateComponent},
  {path: 'updateCustomer', component:CustomerUpdateComponent},
  {path: 'updateAdmin', component:AdminUpdateComponent},
  {path: 'updateDriver', component:DriverUpdateComponent},
  {path: 'allCustomers', component:CustomerDeleteComponent},
  {path: 'bestDrivers', component:BestDriverComponent},
  {path: 'addTripBooking', component:TripbookingaddComponent},
  {path: 'customerTrips', component:CustomerwiseComponent},
  {path: 'customerTripBill', component:CustomerbillComponent},
  {path: 'retrieveTripsById', component:AdminGetTripsByIdComponent},
  {path: 'retrieveTripsCabwise', component:GetTripCabWiseComponent},
  {path: 'retrieveTripsCustomerWise', component:GetTripsCustomerWiseComponent},
  {path: 'retrieveTripsDateWise', component:GetTripDateWiseComponent},
  {path: 'afterLogin', component:AfterLoginComponent},
  {path: 'afterAdminLogin', component:AfterAdminLoginComponent},
  {path: 'afterDriverLogin', component:AfterDriverLoginComponent},
  {path: 'rateDriver', component:RateDriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
