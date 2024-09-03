import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-getbookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getbookings.component.html',
  styleUrl: './getbookings.component.css'
})
export class GetbookingsComponent {
 bookings:any=null;
 constructor(private service: ServiceService){
  service.getBookings().subscribe((bookings: any)=> { console.log(bookings);
    this.bookings=bookings;
  });
 }
}
