import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { CityComponent } from './pages/admin/city/city.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/admin/home/home.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { BookFlightsComponent } from './pages/admin/book-flights/book-flights.component';
import { SearchFlightComponent } from './pages/admin/search-flight/search-flight.component';
import { MatExpansionModule } from '@angular/material/expansion';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogBoxComponent } from './pages/admin/dialog-box/dialog-box.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { AboutComponent } from './pages/admin/about/about.component';
import { TicketDetailsComponent } from './pages/admin/ticket-details/ticket-details.component';
import { TicketComponent } from './pages/admin/ticket/ticket.component';


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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatRadioModule,
    MatGridListModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    provideAnimationsAsync('noop'),
    {
      provide: MAT_DIALOG_DATA,
      useValue: {} 
    },
    {
      provide: MatDialogRef,
      useValue: {} 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
