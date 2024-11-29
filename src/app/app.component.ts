import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FlightBooking';
  panelOpenState = false;
  userName: string | null = null;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Check if the code is running in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Get user data from localStorage
      this.userName = localStorage.getItem('userName');
      console.log("app",this.userName);
    }
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const authToken = localStorage.getItem('authToken');
      return authToken !== null;  // If token exists, user is logged in
    }
    return false;  // If not in browser, consider user as not logged in
  }

  // Handle logout by clearing localStorage and redirecting to login
  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userName');
      this.userName = null;  // Reset username
      this.router.navigate(['/login']);  // Redirect to login page
    }
  }
}
