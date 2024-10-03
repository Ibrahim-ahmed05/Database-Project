import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SenderService } from '../../../sender.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {
  // departureAirport: string = this.service.departureAirport;
  // arrivalAirport: string = this.service.arrivalAirport;
  // departDate: string = this.service.departDate;
  // arriveDate: string = this.service.arriveDate;
  // numberOfTravellers = this.service.numberOfTravellers;
  // class: string = this.service.class;
  // price:number=this.service.price;
  // totalPrice:number= this.numberOfTravellers*this.price;

  departureAirport: string = "Karachi";
  arrivalAirport: string = "Munich";
  departDate: string = "8/20/2024";
  arriveDate: string = "8/14/2024";
  numberOfTravellers = 2;
  class: string = "Business";
  price:number=1000;
  totalPrice:number= this.price*this.numberOfTravellers;

  title:string="";
  firstName:string="";
  lastName:string="";
  gender:string="";
  DOB:string="";
  nationality:string="";

  constructor(
    private router: Router,
    private service: SenderService,
  ){}

  confirmTicket(){
    this.service.title=this.title;
    this.service.firstName=this.firstName;
    this.service.lastName=this.lastName;
    this.service.gender=this.gender;
    this.service.DOB=this.DOB;
    this.service.nationality=this.nationality;
    this.router.navigate(["/ticket"]);
  }
}
