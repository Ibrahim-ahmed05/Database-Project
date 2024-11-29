import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';  // Import Axios

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loading = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;  // Add a success message property

  registerForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;  // Prevent submission if form is invalid
    }

    this.loading = true;
    const formData = this.registerForm.value;
    console.log(formData);

    // Send POST request to the backend
    axios.post('http://localhost:3001/users', formData)
      .then((response) => {
        this.loading = false;
        this.successMessage = "Registration successful!";  // Set the success message
        this.errorMessage = null;  // Clear any previous error message
        alert('Registeration Completed! You are being redirected to login page');
        setTimeout(() => {
          this.router.navigate(['/login']);  // Redirect after successful registration
        }, 1500);  // Wait for 2 seconds before redirecting
      })
      .catch((error) => {
        // Handle error response
        this.loading = false;
        console.error('Axios error:', error);  // Log the error for debugging
        if (error.response) {
          this.errorMessage = error.response.data || 'Registration failed. Please try again.';
        } else {
          this.errorMessage = 'An unknown error occurred. Please try again.';
        }
        this.successMessage = null;  // Clear any previous success message
      });
  }
}
