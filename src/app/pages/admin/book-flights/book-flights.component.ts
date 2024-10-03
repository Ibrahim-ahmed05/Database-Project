import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { SenderService } from '../../../sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seach-flights',
  templateUrl: './book-flights.component.html',
  styleUrl: './book-flights.component.css'
})
export class BookFlightsComponent implements OnInit {


  departureAirport: string = this.service.departureAirport;
  arrivalAirport: string = this.service.arrivalAirport;
  departDate: string = this.service.departDate;
  arriveDate: string = this.service.arriveDate;
  numberOfTravellers = this.service.numberOfTravellers;
  class: string = this.service.class;
  price:number=this.service.price;
  flights: any;
  // isExpanded = false;

  constructor(
    private router: Router,
    private service: SenderService,
    private dialog: MatDialog
  ) { }
  ngOnInit(): void { }
  
  ticketDetails(){

    this.router.navigate(["/ticket-details"])
  }
  
  // toggleCard() {
  //   this.isExpanded = !this.isExpanded;
  // }
  


  // editSearch(){
  //   this.router.navigate(["/search-flight"])
  // }  

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '550px'

    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');

    });
  }
} 