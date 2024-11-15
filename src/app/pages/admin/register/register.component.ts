import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SenderService } from '../../../sender.service';
import { SupabaseService } from '../../../../config/supabaseclient';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: SenderService,
    private auth:SupabaseService,
  ) {
    this.registerForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email, Validators.minLength(5)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
    });
  }
  onsubmit() {
    this.auth.signUp(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password).then((res) => {
      console.log(res);
    })
  }
  login() {
    this.router.navigate(['/login']);
  }
}
