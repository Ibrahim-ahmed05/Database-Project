import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // Check if LocalStorage is available
  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  // Get the item from LocalStorage
  private getItem(key: string): string | null {
    return this.isLocalStorageAvailable() ? localStorage.getItem(key) : null;
  }

  // Get the token with expiry check from LocalStorage
  private getItemWithExpiryCheck(key: string): string | null {
    const itemString = this.getItem(key);
    if (!itemString) {
      return null;
    }

    try {
      const item = JSON.parse(itemString);
      if (item.expiry && new Date().getTime() > item.expiry) {
        this.removeItem(key);  // Remove expired item
        return null;
      }
      return item.value;
    } catch (error) {
      console.error('Error parsing item from localStorage:', error);
      return null;
    }
  }

  // Remove item from LocalStorage
  private removeItem(key: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(key);
    }
  }

  // AuthGuard canActivate method
  canActivate(route: Route): Observable<boolean> {
    if (isPlatformBrowser(this.platformId)) {
      const authToken = this.getItemWithExpiryCheck('authToken');
      const userName = this.getItem('userName');  // Retrieve username
      const email= this.getItem('email');
      console.log('Auth token:', authToken);  // Check token value
      console.log('User name:', userName);   // Check username value
      console.log('Email:',email);
      // If both auth token and username exist, allow access
      if (authToken && userName) {
        return of(true);
      } else {
        console.log('Token or Username not found or expired');
        this.router.navigate(['/login']); // Redirect to login if token/username is missing or expired
        return of(false); // Deny access
      }
    }

    return of(false); // Deny access in non-browser environments
  }

  // Helper method to store the token and username
  storeToken(token: string, userName: string, expiryInSeconds: number): void {
    const authToken = {
      value: token,
      expiry: new Date().getTime() + expiryInSeconds * 1000,
    };
    localStorage.setItem('authToken', JSON.stringify(authToken));  // Store token
    localStorage.setItem('userName', userName);  // Store username
  }
}
