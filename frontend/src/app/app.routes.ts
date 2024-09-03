import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppComponent } from './app.component';
import { BookcabComponent } from './bookcab/bookcab.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';
import { CabviewComponent } from './cabview/cabview.component';
import { GetCabsComponent } from './get-cabs/get-cabs.component';
import { GetbookingsComponent } from './getbookings/getbookings.component';

export const routes: Routes = [
   
    {path: "cabs", component:CabviewComponent},
    {path: "addCab", component:BookcabComponent},
    {path: "bookCab", component:CabBookingComponent},
    {path: "getCab", component:GetCabsComponent},
    {path: "bookings", component:GetbookingsComponent},
    {path: "addEmployee", component:AddEmployeeComponent}


];
