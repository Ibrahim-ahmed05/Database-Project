import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import axios from 'axios';  // Import Axios

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  passengers: any[] = [];
  numberOfTravellers: number = 1;
  selectedFlight: any = null;
  choice: number = 0;
  class: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = history.state as { numberOfTravellers: number; selectedFlight: any; choice: number; class: string };
    
    if (navigation.selectedFlight) {
      this.selectedFlight = navigation.selectedFlight;
      console.log('Selected Flight from booking:', this.selectedFlight);
    }
    if (navigation && navigation.numberOfTravellers) {
      this.numberOfTravellers = navigation.numberOfTravellers;
      this.updatePassengers();
    }
    if (navigation && navigation.choice) {
      this.choice = navigation.choice;
    }
    if (navigation && navigation.class) {
      this.class = navigation.class;
    }
  }

  updatePassengers() {
    this.passengers = Array.from({ length: this.numberOfTravellers }, (_, i) => ({
      FirstName: '',
      LastName: '',
      Gender: '',
      PassportNumber: '',
      ContactNumber: ''
    }));
  }

  saveDetails() {
    for (let passenger of this.passengers) {
      if (!passenger.FirstName || !passenger.LastName || !passenger.Gender || !passenger.PassportNumber || !passenger.ContactNumber) {
        alert('Please fill all details for all passengers.');
        return;
      }
    }

    // Calculate total price based on selected flight and number of passengers
    const totalPrice = this.selectedFlight.price * this.numberOfTravellers;

    // API call to save passenger details in the database
    axios.post('http://localhost:3001/addpassenger', this.passengers)
      .then(response => {
        console.log('Passengers added successfully:', response.data);
        
        // Pass all the required data to the TicketComponent using router navigation state
        this.router.navigate(['/ticket'], {
          state: {
            passengers: this.passengers,
            selectedFlight: this.selectedFlight,
            totalPrice: totalPrice,
            choice: this.choice,
            class: this.class
          }
        });
      })
      .catch(error => {
        console.error('Error adding passengers:', error);
        alert('There was an error adding passenger details.');
      });
  }
}
