import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
name:string="";
address:string="";
employee:any=null;
constructor(private http: HttpClient, private router: Router){
  
}
onSubmit(): void {
  
  this.employee={
    "name": this.name,
    "address": this.address
  }

  this.http.post<any>('http://localhost:8091/addEmployee', this.employee).subscribe((p: any)=>{
     
      this.employee=null;
      
      this.name="";
      this.address="";
      this.router.navigate(['/']);
      });

  }
}
