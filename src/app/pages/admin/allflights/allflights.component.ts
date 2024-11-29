import { Component, OnInit } from '@angular/core';
import axios from 'axios';  // Import Axios

@Component({
  selector: 'app-allflights',
  templateUrl: './allflights.component.html',  // Corrected template path
  styleUrls: ['./allflights.component.css']
})
export class AllFlightsComponent implements OnInit {

  flights: any[] = [];  // Array to hold flights data

  constructor() {
    console.log('All flights');
  }

  ngOnInit(): void {
    this.getFlights();  // Fetch the flights when the component is initialized
  }

  // Method to fetch flight data using Axios
  async getFlights(): Promise<void> {
    try {
      console.log('getting flights');
      const response = await axios.get('http://localhost:3001/flights');  // Adjust port if needed
      this.flights = response.data;  // Store the fetched flight data in the flights array
      console.log('Flights fetched successfully:', this.flights);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  }

  // Method to handle ticket details, you can modify it to show more info or navigate
  ticketDetails(flight: any): void {
    console.log(flight);  // Replace with navigation or modal as needed
  }
}
