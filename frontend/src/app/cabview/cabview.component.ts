import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cabview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabview.component.html',
  styleUrl: './cabview.component.css'
})
export class CabviewComponent {
  cabList: any = [];
  cab: any = null;
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private service: ServiceService, private http: HttpClient) {
    console.log("In component constructor");

    this.service.getCabs().subscribe((cabList: any) => {
      this.cabList = cabList;
    });

    // this.cabList= this.service.cabList;
    // console.log(this.cabList);
  }

  getCabs(): any {

    this.cabList = this.service.cabList;
    console.log("Inside cabview: ", this.service.getCabs());

  }
  deleteCab(cabNo: number): void {
    // Confirm deletion
    if (confirm('Are you sure you want to delete this cab?')) {
      this.service.deleteCab(cabNo).subscribe(
        (msg: any) => {
          // Remove cab from the list
          console.log(msg);
          if (msg == null) {
            this.cabList = this.cabList.filter((cab: { cabNo: number; }) => cab.cabNo !== cabNo);
          }
          else {
            window.alert(msg["message: "]);
          }
        },
        (error: any) => console.error('Error deleting cab', error)
      );
    }
  }


  
  updateCab(cabNo: number): void {
    // Find the cab object by cabNo
    const cab = this.cabList.find((c: { cabNo: number; }) => c.cabNo === cabNo);

    if (cab) {
        // Prompt user for confirmation
        const confirmed = window.confirm('Are you sure you want to update this cab?');

        if (confirmed) {
            // Update cab details (example logic for updating)
            const newSeatsBooked = prompt('Enter new number of seats booked:', cab.seatsBooked.toString());
            const newNextAvailableAt = parseInt(prompt('Enter new next available time (in hours):', cab.nextAvailableAt.toString()) || cab.nextAvailableAt.toString(), 10);
            const newRoute = prompt('Enter new route:', cab.route);

            cab.seatsBooked = newSeatsBooked ? +newSeatsBooked : cab.seatsBooked;
            cab.nextAvailableAt = isNaN(newNextAvailableAt) ? cab.nextAvailableAt : newNextAvailableAt;
            cab.route = newRoute || cab.route;

            // Log the updated cab details (or you could update this data on the server)
            this.cab = {
                "cabNo": cabNo,
                "seatsBooked": cab.seatsBooked,
                "nextAvailableAt": cab.nextAvailableAt,
                "route": cab.route
            };

            // Make HTTP PUT request to update the cab
            this.http.put<any>('http://localhost:8091/cab', this.cab).subscribe({
                next: (response: any) => {
                    console.log('Updated cab details:', response);
                    this.cab = null; // Clear cab or update UI as needed
                },
                error: (error: any) => {
                    console.error('Error updating cab:', error);
                }
            });
        }
    } else {
        console.error('Cab not found!');
    }
}



  }
