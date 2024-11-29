import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { BookFlightsComponent } from './pages/admin/book-flights/book-flights.component';
import { SearchFlightComponent } from './pages/admin/search-flight/search-flight.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { AboutComponent } from './pages/admin/about/about.component';
import { TicketDetailsComponent } from './pages/admin/ticket-details/ticket-details.component';
import { TicketComponent } from './pages/admin/ticket/ticket.component';
import { AuthGuard } from './Services/auth.guard';
import { AllFlightsComponent } from './pages/admin/allflights/allflights.component';
import { DialogBoxComponent } from './pages/admin/dialog-box/dialog-box.component';
import { PaymentComponent } from './pages/admin/payment/payment.component';
import { AllbookingsComponent } from './pages/allbookings/allbookings.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent, 
    // canActivate: [AuthGuard], // Allow access without login
  },
  {
    path: 'book-flights',
    component: BookFlightsComponent,
    canActivate: [AuthGuard], // Protect this route
  },
  {
    path: 'search-flight',
    component: SearchFlightComponent,
    canActivate: [AuthGuard], // Protect this route
  },
  {
    path: 'ticket-details',
    component: TicketDetailsComponent,
    canActivate: [AuthGuard], // Protect this route
  },
  {
    path: 'ticket',
    component: TicketComponent,
    canActivate: [AuthGuard], // Protect this route
  },
  {
    path: 'about',
    component: AboutComponent, // Allow access without login1
  },
  {
    path:'dialog-box',
    component:DialogBoxComponent,
  },
  {
    path: 'login',
    component: LoginComponent, // Allow access without login
  },
  {
    path:'flights',
    component:AllFlightsComponent,
  },
  {
    path: 'register',
    component: RegisterComponent, // Allow access without login
  },
  {
    path: 'payment',
    component: PaymentComponent // Allow access without login
  },
  {
    path: 'allbookings',
    component: AllbookingsComponent // Allow access without login
  },
  {
    path: '**',
    redirectTo: 'home', // Default fallback route
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
