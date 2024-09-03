import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-get-cabs',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './get-cabs.component.html',
  styleUrl: './get-cabs.component.css'
})
export class GetCabsComponent {
  search:number=0;
  cab:any=null;
  inputValue:any;
  dropdownOptions: string[] = ['By CabNo', 'By Place', 'By Availability', 'Get all booked cabs'];
  
  // Variable to hold the selected value
  selectedOption: string = 'By CabNo';

  // Method to handle selection change
  onSelectionChange(event: any): void {
    this.selectedOption = event.target.value;
    if(this.selectedOption=='Get all booked cabs'){
      this.getBookedCabs();
    //  console.log(this.cab);
    }

  }
  constructor(private http: HttpClient){

  }
  handleSearch(): any{
    if(this.selectedOption=='By CabNo'){
      this.getCabById(this.inputValue);
    }
    else if(this.selectedOption=='By Place'){
        this.getCabsByPlace(this.inputValue);
    }
    else if(this.selectedOption=='By Availability'){
      this.getCabsByAvailability(this.inputValue);
    }
    
   // console.log(this.cab);
  }
  getCabById(inputValue: number){
    this.searchByCabId(inputValue).subscribe((cab:any)=>{
      this.cab=cab;
      console.log(this.cab);
    });
  }
  searchByCabId(search: number):Observable<any>{
    console.log(search);
    return this.http.get<any>(`http://localhost:8091/cab/${search}`);
  }

  getCabsByPlace(inputValue: number){
    this.searchCabsByPlace(inputValue).subscribe((cab:any)=>{
      this.cab=cab;
      console.log(this.cab);
    });
  }
  searchCabsByPlace(search: number):Observable<any>{
    console.log(search);
    return this.http.get<any>(`http://localhost:8091/cab/place/${search}`);
  }

  getCabsByAvailability(inputValue: number){
    this.searchByAvailability(inputValue).subscribe((cab:any)=>{
      this.cab=cab;
      console.log(this.cab);
    });
  }
  searchByAvailability(search: number):Observable<any>{
    console.log(search);
    return this.http.get<any>(`http://localhost:8091/cab/available/${search}`);
  }
  getBookedCabs(){
    this.searchBookedCabs().subscribe((cab: any)=>{
      this.cab=cab;
      console.log(this.cab);
    });
  }
  searchBookedCabs():Observable<any>{
    return this.http.get<any>('http://localhost:8091/cab/booked');
  }


}
