import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { SenderService } from '../../../sender.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrl: './search-flight.component.css'
})
export class SearchFlightComponent {
  // static deptAirportValue(): any {
    
  // }

  cityList: string[] = ["Karachi", "Munich", "Dubai", "Manchester", "Riyadh", "New York", "Jeddah"];
  classes: string[] = ["Economy", "Business", "First"];
  selectedValue: string = "1";
  deapartureAirport: string = "";
  arrivalAirport: string = "";
  departDate: string = "";
  arriveDate: string = "";
  numberOfTravellers: number = 0;
  class: string = "";
  price: number = 1000;

  constructor(
    private router: Router,
    private service: SenderService
  ) { }

  onChange(event: MatRadioChange) {
    this.selectedValue = event.value;
  }

  searchFlights() {
    this.service.departureAirport = this.deapartureAirport;
    this.service.arrivalAirport = this.arrivalAirport;
    this.service.departDate = this.departDate;
    this.service.arriveDate = this.arriveDate;
    this.service.numberOfTravellers = this.numberOfTravellers;
    this.service.class = this.class;
    this.service.price = this.price;
    this.router.navigate(["/book-flights"])
  }
}
