import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      age: new FormControl(null, [Validators.required,Validators.min(18)]),
      gender: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.pattern("^\\+84\\d{9,10}$")])
    });
  }
  countryList = [
    {
      id: 1, name: 'Việt Nam'
    },
    {
      id: 2, name: 'Lào'
    }
  ];
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }


  addRegister() {
    console.log(this.registerForm.value)
  }

  getRegisterPassword() {
    return this.registerForm.get('password').errors;
  }
}
