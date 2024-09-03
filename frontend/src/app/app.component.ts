import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GetCabsComponent } from './get-cabs/get-cabs.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, GetCabsComponent, RouterOutlet, RouterLinkActive, RouterLink, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  
}
