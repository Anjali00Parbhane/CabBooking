import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cab-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cab-booking.component.html',
  styleUrl: './cab-booking.component.css'
})
export class CabBookingComponent {
  EmployeeId:number=0;
  seatsToBeBooked:number=0;
  CabNo:number=0;
  constructor(private http: HttpClient, private service: ServiceService, private router: Router){

  }
  onSubmit(): void {

    console.log('Form Submitted');
    
    this.http.put<any>(`http://localhost:8091/cab/book/${this.CabNo}/${this.seatsToBeBooked}/${this.EmployeeId}`, null).subscribe((p: any)=>{
      console.log(p);
      this.service.getBookings();
     
      this.seatsToBeBooked=0;
      this.CabNo=0;
      this.EmployeeId=0;
      this.router.navigate(['/']);
      });
      


  }
}
