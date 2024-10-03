import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SenderService } from '../../../sender.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = ""
  password: string = ""
  username: string = ""
  contactNumber: string = ""
  navigate: any;

  constructor(
    private router: Router,
    private service: SenderService
  ){}
  login(){
    this.router.navigate(["/login"])
  }
}
