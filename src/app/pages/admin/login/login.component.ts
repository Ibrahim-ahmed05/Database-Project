import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false; // State to indicate if the form is submitting
  errorMessage: string | null = null; // Error message for invalid login
  successMessage: string | null = null; // Success message for valid login

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  // Method to handle form submission for login
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }

    this.loading = true;  // Set loading state
    this.errorMessage = null;  // Reset error message
    this.successMessage = null;  // Reset success message

    const formData = this.loginForm.value;  // Get form data

    // Perform login request using Axios
    axios.post('http://localhost:3001/users/login', formData)
      .then((response) => {
        if (response.data.success) {
          console.log("response", response.data);

          const authToken = {
            value: response.data.token,
            expiry: new Date().getTime() + 3600 * 1000  // Token expiry in 1 hour
          };

          // Store the auth token and username in localStorage
          localStorage.setItem('authToken', JSON.stringify(authToken));
          localStorage.setItem('userName', response.data.name);
          localStorage.setItem('email', response.data.email);   // Store the username

          alert('Welcome User');
          this.router.navigate(['/home']);  // Redirect to home page
        } else {
          this.errorMessage = response.data.message || 'Invalid credentials';
        }
      })
      .catch((error) => {
        this.errorMessage = error.response?.data?.message || 'An error occurred during login.';
      })
      .finally(() => {
        this.loading = false; // Reset loading state
      });
  }
}
