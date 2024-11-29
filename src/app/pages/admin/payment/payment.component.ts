import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import axios from 'axios';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // Data passed from the previous component
    private dialogRef: MatDialogRef<PaymentComponent> // Dialog reference to close after submission
  ) {}

  // Submit payment information
  onSubmit() {
    console.log('Payment Submitted');
    console.log('Payment Data:', this.data);

    // Extract email from localStorage
    const email = localStorage.getItem('email');

    if (!email) {
      // If email is not available, alert the user and close the dialog
      alert('Email is not available. Please log in again.');
      this.dialogRef.close();
      return;
    }

    // Prepare the data to send to the backend
    const payload = {
      recipientEmail: email,         // Send the user's email
      ticketDetails: this.data       // Send ticket details (flight, passengers, price, etc.)
    };
     console.log("Payload",payload);
    // Make the POST request to send the ticket email
    axios.post('http://localhost:3001/send-ticket', payload)
      .then(response => {
        console.log(response.data.message); // Success message from backend
        alert('Your ticket has been emailed successfully!');
      })
      .catch(error => {
        // Error handling if the email couldn't be sent
        console.error('Error:', error);
        alert('There was an issue with sending the ticket. Please try again.');
      })
      .finally(() => {
        // Close the dialog after submission, regardless of success or failure
        this.dialogRef.close();
        
      });
  }

  // Close the payment dialog without submitting the payment
  cancelPayment() {
    this.dialogRef.close();
  }
}
