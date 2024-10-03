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

const routes: Routes = [

  {
    path: 'book-flights',
    component: BookFlightsComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search-flight',
    component: SearchFlightComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'ticket-details',
    component: TicketDetailsComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
