import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css'],
})
export class SearchFlightComponent implements OnInit {
  today: Date = new Date();
  cityList: string[] = [];
  classes: string[] = ['Economy', 'Business', 'First'];
  selectedValue: string = '1';
  source: string = '';
  destination: string = '';
  departDate: string = '';
  arriveDate: string = '';
  numberOfTravellers: number = 1;
  flightClass: string = 'Economy'; 
  price: number = 1000;
  errorMessage: string = '';
  choice:number=0;
  constructor(private router: Router) {}

  ngOnInit() {
    this.loadCities();
  }

  // Fetch cities using Axios
  async loadCities() {
    try {
      const response = await axios.get('http://localhost:3001/cities');
      this.cityList = response.data;
      console.log('Cities loaded:', this.cityList);
    } catch (error) {
      console.error('Error fetching cities:', error);
      this.errorMessage = 'Failed to load cities. Please try again later.';
    }
  }

  onChange(event: MatRadioChange) {
    this.selectedValue = event.value;
  }

  // Validate if source and destination are the same
  citiesAreSame(): boolean {
    return this.source.trim().toLowerCase() === this.destination.trim().toLowerCase() && this.source.trim() !== '';
  }

  // Check if all required fields are filled
  allFieldsFilled(): boolean {
    return (
      this.source.trim() !== '' &&
      this.destination.trim() !== '' &&
      this.departDate !== '' &&
      (this.selectedValue === '2' || this.arriveDate !== '') &&
      this.numberOfTravellers > 0 &&
      this.flightClass !== ''
    );
  }

  searchFlights() {
    this.errorMessage = '';

    // Validate all fields are filled
    if (!this.allFieldsFilled()) {
      this.errorMessage = 'Please fill all the fields!';
      return;
    }

    // Validate if source and destination are not the same
    if (this.citiesAreSame()) {
      this.errorMessage = 'Source and Destination cannot be the same!';
      return;
    }

    // Prepare search data object
    const searchData = {
      source: this.source.trim(),
      destination: this.destination.trim(),
      departDate: this.departDate,
      arriveDate: this.arriveDate,
      numberOfTravellers: this.numberOfTravellers,
      flightClass: this.flightClass,
      price: this.price,
      choice:this.selectedValue,
    };

    console.log('Flight search data:', searchData);

    // Navigate to the flight booking page with state data (optional)
    this.router.navigate(['/book-flights'], { state: { searchData } });
  }
}
