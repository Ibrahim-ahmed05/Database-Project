import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import provideHttpClient and withFetch

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { CityComponent } from './pages/admin/city/city.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Import the MatNativeDateModule for DateAdapter
import { MatNativeDateModule } from '@angular/material/core'; // Add this for native Date support
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/admin/home/home.component';
import { BookFlightsComponent } from './pages/admin/book-flights/book-flights.component';
import { SearchFlightComponent } from './pages/admin/search-flight/search-flight.component';
import { DialogBoxComponent } from './pages/admin/dialog-box/dialog-box.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { AboutComponent } from './pages/admin/about/about.component';
import { TicketDetailsComponent } from './pages/admin/ticket-details/ticket-details.component';
import { TicketComponent } from './pages/admin/ticket/ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllFlightsComponent } from './pages/admin/allflights/allflights.component';
import { MatButtonModule } from '@angular/material/button';
// Import MatButtonToggleModule for toggle buttons
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PaymentComponent } from './pages/admin/payment/payment.component';
import { AllbookingsComponent } from './pages/allbookings/allbookings.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CityComponent,
    HomeComponent,
    BookFlightsComponent,
    SearchFlightComponent,
    DialogBoxComponent,
    RegisterComponent,
    AboutComponent,
    TicketDetailsComponent,
    TicketComponent,
    AllFlightsComponent,
    PaymentComponent,
    AllbookingsComponent,
  ],
  imports: [
    NoopAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatRadioModule,
    MatGridListModule,
    MatDialogModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatButtonToggleModule,  // Add this line to import MatButtonToggleModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()), // Enable fetch API for HttpClient
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}, 
    },
    {
      provide: MatDialogRef,
      useValue: {}, 
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
