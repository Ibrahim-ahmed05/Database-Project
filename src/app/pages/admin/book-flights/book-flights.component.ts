import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';  // Import Router
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';  // Make sure it's imported
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flights.component.html',
  styleUrls: ['./book-flights.component.css'],
})
export class BookFlightsComponent implements OnInit {
  source: string = '';
  destination: string = '';
  departDate: string = '';
  arriveDate: string = '';
  numberOfTravellers: number = 1;
  flights: any[] = [];
  errorMessage: string = '';
  class:string='';
  choice:number=0;
  constructor(private router: Router, public dialog: MatDialog) {}  // Inject Router

  ngOnInit(): void {
    const searchData = history.state?.searchData;
    if (searchData) {
      this.source = searchData.source;
      this.destination = searchData.destination;
      this.departDate = searchData.departDate;
      this.arriveDate = searchData.arriveDate;
      this.numberOfTravellers = searchData.numberOfTravellers;
      this.choice=searchData.choice;
      this.class=searchData.flightClass;
      this.fetchFlights();
    }
  }

  async fetchFlights() {
    if (!this.source || !this.destination) {
      this.errorMessage = 'Please enter both source and destination.';
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/searchflights', {
        params: {
          source: this.source.trim(),
          destination: this.destination.trim(),
        },
      });
      this.flights = response.data;
      console.log('Flights fetched:', this.flights);
    } catch (error) {
      console.error('Error fetching flights:', error);
      this.errorMessage = 'Error fetching flights. Please try again later.';
    }
  }

  // Redirect to DialogBoxComponent with number of travellers as a route parameter
  bookFlight(flight: any) {
    // Pass flight details and number of travelers using the state object
    this.router.navigate(['/dialog-box'], { 
      state: { 
        numberOfTravellers: this.numberOfTravellers,
        selectedFlight: flight,  // Add this line to pass flight data
        choice:this.choice,
        class:this.class,
      } 
    });
  }
  
  editSearch() {
    window.history.back();
  }

  calculateDuration(departure: string, arrival: string): string {
    const depTime = new Date(departure);
    const arrTime = new Date(arrival);
    const diffMs = arrTime.getTime() - depTime.getTime(); // Difference in milliseconds
    
    const hours = Math.floor(diffMs / (1000 * 60 * 60));  // Calculate hours
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));  // Calculate minutes
    
    // Fix template string interpolation
    return `${hours}h ${minutes}m`;  // Corrected the string interpolation
  }
}
