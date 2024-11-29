import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';
import axios from 'axios';  // Import Axios for HTTP requests

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  passengers: any[] = [];
  selectedFlight: any = null;
  totalPrice: number = 0;
  choice: number = 0;
  class: string = '';

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    const navigation = history.state as { passengers: any[]; selectedFlight: any; totalPrice: number; choice: number; class: string };
    if (navigation) {
      this.passengers = navigation.passengers;
      this.selectedFlight = navigation.selectedFlight;
      this.totalPrice = navigation.totalPrice;
      this.choice = navigation.choice;
      this.class = navigation.class;
    }
    if (this.choice == 1) {
      this.totalPrice *= 2;
    }
    if (this.class == 'Business') {
      this.totalPrice += 10000;
    }
    if (this.class == 'First') {
      this.totalPrice += 15000;
    }
    console.log('Selected Flight:', this.selectedFlight);
    console.log('Passenger Info:', this.passengers);
    console.log('Total Price:', this.totalPrice);
  }

  async confirmBooking() {
    try {
      // Prepare the data for the backend
      const bookingData = this.passengers.map(passenger => ({
        flightNumber: this.selectedFlight.flightNumber,
        PassportNumber: passenger.PassportNumber,
        email: localStorage.getItem('email'),  // Retrieve the user's email from localStorage
        totalPrice: this.totalPrice
      }));

      // Send a POST request to store booking data for each passenger
      const response = await axios.post('http://localhost:3001/bookings', { bookings: bookingData });
      console.log('Booking data sent:', response.data.message);
      
      // Open the payment dialog after successfully storing the booking
      const dialogRef = this.dialog.open(PaymentComponent, {
        width: '500px',
        data: {
          passengers: this.passengers,
          selectedFlight: this.selectedFlight,
          totalPrice: this.totalPrice
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Payment dialog closed');
        // Handle post-payment logic here if needed
      });
      
    } catch (error) {
      console.error('Error saving booking data:', error);
      alert('There was an issue saving the booking. Please try again.');
    }
  }
}
