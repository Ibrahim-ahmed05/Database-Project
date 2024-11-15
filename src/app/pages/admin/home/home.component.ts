import { Component } from '@angular/core';
import { API } from '../../../Services/abc.services';
// import { Subscrib } from "module";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'FlightBooking';
  panelOpenState = false;

  constructor() {
  }
// getStudents(){
//   this.api.getSudent(1).subscribe((res: any)=>{
//     console.log(res)
//   })
//   console.log("Working")
// }
// testSupabase() {
//   this.supabaseService.testConnection().then((response) => {
//     if (response.error) {
//       console.error('Supabase Connection Error:', response.error);
//     } else {
//       console.log('Supabase Connection Successful:', response.data);
//     }
//   });
// }
}
