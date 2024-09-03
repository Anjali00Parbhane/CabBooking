import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-bookcab',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bookcab.component.html',
  styleUrl: './bookcab.component.css'
})
export class BookcabComponent {
  constructor(private service: ServiceService, private http: HttpClient, private router: Router){

  }
  seatsBooked:number=0;
  nextAvailableAt:number=0;
  route:String="";
  cab:any=null;
  onSubmit(): void {
    console.log('Form Submitted');
    this.cab={
      "seatsBooked": this.seatsBooked,
    "nextAvailableAt": this.nextAvailableAt,
    "route": this.route

    }
    console.log('Cab Details:', this.cab);
    this.http.post<any>('http://localhost:8091/cab', this.cab).subscribe((p: any)=>{
      console.log(p);
      this.service.getCabs();
      this.cab=null;
      this.nextAvailableAt=0;
      this.route="";
      this.seatsBooked=0;
      this.router.navigate(['/']);
      });
      
   

    
    // Perform further actions, such as sending the data to a server
  }

}
