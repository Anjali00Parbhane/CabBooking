import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  cabList:any=[];
  constructor(private http: HttpClient) { 
    console.log("service constructor");
    this.getCabs();
  }

  
  getCabs(): Observable<any> {
    console.log("inside function");
    return this.http.get<any>('http://localhost:8091/cabs');
    /*
    this.http.get<any>('http://localhost:8091/cabs').subscribe(
      (cabList: any) => {
       
          this.cabList=cabList;
          console.log("Cabs: ", this.cabList);
          
      }
    );
    */
  }

  deleteCab(cabNo: number): Observable<void> {
    console.log(cabNo);
    return this.http.delete<void>(`http://localhost:8091/cab/${cabNo}`);
  }
  
  getBookings(): Observable<any>{
    return this.http.get<any>('http://localhost:8091/bookings');
  }
  
}
