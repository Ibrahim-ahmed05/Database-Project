import { Component, OnInit } from '@angular/core';
import axios from 'axios';  // Import Axios

// Define the interface for flight details
interface FlightDetails {
  flightNumber: string;
  source: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
}

// Define the interface for passenger details
interface PassengerDetails {
  PassportNumber: string;
}

// Define the interface for a booking
interface Booking {
  bookingId: number;
  PassportNumber: string;
  email: string;
  totalPrice: number;
  flight: FlightDetails;  // Flight details
  passenger: PassengerDetails; // Passenger details
}

@Component({
  selector: 'app-allbookings',
  templateUrl: './allbookings.component.html',
  styleUrls: ['./allbookings.component.css']
})
export class AllbookingsComponent implements OnInit {
  bookings: Booking[] = [];  // Array to store booking data with flight details
  errorMessage: string = '';  // Variable to store error messages

  ngOnInit(): void {
    this.fetchBookings();  // Fetch bookings when the component initializes
  }

  async fetchBookings(): Promise<void> {
    const email = localStorage.getItem('email');  // Retrieve email from localStorage
    console.log('Retrieved email:', email);

    if (!email) {
      this.errorMessage = 'No email found. Please log in.';
      return;
    }

    try {
      const response = await axios.get<Booking[]>('http://localhost:3001/bookings', {
        params: { email }  // Pass email as query parameter
      });
      this.bookings = response.data;  // Store retrieved bookings data
      console.log(response.data);
    } catch (error) {
      console.log(error);
      // this.errorMessage = 'Failed to retrieve bookings. Please try again later.';
      // console.error('Error fetching bookings:', error.response?.data || error.message);
    }
  }
}
