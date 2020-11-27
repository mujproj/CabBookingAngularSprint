import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { CabAddComponent } from './cab/cab-add/cab-add.component';
import { CabService } from './services/cab.service';
import { AdminService } from './services/admin.service';
import { DriverAddComponent } from './driver/driver-add/driver-add.component';
import { CustomerValidateComponent } from './customer/customer-validate/customer-validate.component';
import { AdminValidateComponent } from './admin/admin-validate/admin-validate.component';
import { DriverValidateComponent } from './driver/driver-validate/driver-validate.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
import { DriverUpdateComponent } from './driver/driver-update/driver-update.component';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import { BestDriverComponent } from './driver/best-driver/best-driver.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    AdminAddComponent,
    CabAddComponent,
    DriverAddComponent,
    CustomerValidateComponent,
    AdminValidateComponent,
    DriverValidateComponent,
    CustomerUpdateComponent,
    AdminUpdateComponent,
    DriverUpdateComponent,
    CustomerDeleteComponent,
    BestDriverComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerService, AdminService, CabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
